import { useQuery } from '@apollo/react-hooks';
import { useDidMount } from 'beautiful-react-hooks';
import { decode as blurhashDecode } from 'blurhash';
import gql from 'graphql-tag';
import marked from 'marked';
import React from 'react';

import styles from './styles.module.css';

interface Props {
  markdown: string;
}

const extractMediaIds = (text: string): string[] => {
  const matches = text.match(new RegExp(/\:media\:(.+)\:/g));

  if (!matches) {
    return [];
  }

  return matches.map((match) => match.replace(':media:', '').replace(':', ''));
};

const generateHtmlFromMarkdown = (
  markdown: string,
  mediaAssets: Array<{
    id: string;
    name: string;
    fileName?: string;
    url?: string;
    width: number;
    height: number;
    blurhash?: string;
  }>,
): string => {
  let html = marked(markdown);

  for (const mediaAsset of mediaAssets) {
    if (mediaAsset.fileName) {
      html = html.replace(
        `:media:${mediaAsset.id}:`,
        `<div data-markdown class="${styles.media} ${
          styles['media-image']
        }" style="padding-bottom: ${
          (mediaAsset.height / mediaAsset.width) * 100
        }%">${
          mediaAsset.blurhash
            ? `<canvas data-blurhash="${mediaAsset.blurhash}" width="32" height="32"></canvas>`
            : ''
        }<img loading="lazy" src="${
          process.env.NEXT_PUBLIC_APP_URL
        }/static/media/${mediaAsset.fileName}" alt="${
          mediaAsset.fileName
        }" /></div>`,
      );
    }

    if (mediaAsset.url) {
      const url = new URL(mediaAsset.url);

      if (['youtube.com', 'youtu.be'].includes(url.hostname)) {
        const youtubeId = url.pathname.split('/').pop();

        html = html.replace(
          `:media:${mediaAsset.id}:`,
          `<div class="${styles.media} ${
            styles['media-video']
          }" style="padding-bottom: ${
            (mediaAsset.height / mediaAsset.width) * 100
          }%"><iframe loading="lazy" src="https://youtube.com/embed/${youtubeId}" frameborder="0" allowfullscreen>${url}</iframe></div>`,
        );
      }
    }
  }

  return html;
};

const Markdown = ({ markdown }: Props) => {
  const mediaIds = extractMediaIds(markdown);
  const { data } = useQuery(
    gql`
      query fetchData($ids: [String]) {
        mediaAssets(ids: $ids) {
          id
          name
          fileName
          url
          width
          height
          blurhash
        }
      }
    `,
    { variables: { ids: mediaIds } },
  );
  const mediaAssets = (data && data.mediaAssets) || [];

  const __html = generateHtmlFromMarkdown(markdown, mediaAssets);

  useDidMount(() => {
    (document.querySelectorAll('[data-blurhash]') as any).forEach(
      (canvas: HTMLCanvasElement) => {
        try {
          const pixels = blurhashDecode(
            `${canvas.getAttribute('data-blurhash')}`,
            32,
            32,
          );
          const ctx = canvas.getContext('2d');
          const imageData = ctx?.createImageData(32, 32);
          if (ctx && imageData) {
            imageData.data.set(pixels);
            ctx.putImageData(imageData, 0, 0);
          }
        } catch (e) {
          // silence!
        }
      },
    );
  });

  return (
    <div dangerouslySetInnerHTML={{ __html }} className={styles.markdown} />
  );
};

export default Markdown;
