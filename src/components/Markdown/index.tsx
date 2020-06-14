import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import marked from 'marked';
import React from 'react';

import styles from './styles.module.scss';

interface Props {
  markdown: string;
}

const FETCH_MEDIA = gql`
  query fetchData($ids: [String]) {
    mediaAssets(ids: $ids) {
      id
      name
      fileName
      url
      width
      height
    }
  }
`;

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
        }%"><img loading="lazy" src="${
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
  const { data } = useQuery(FETCH_MEDIA, { variables: { ids: mediaIds } });
  const mediaAssets = (data && data.mediaAssets) || [];

  const __html = generateHtmlFromMarkdown(markdown, mediaAssets);

  return (
    <div dangerouslySetInnerHTML={{ __html }} className={styles.markdown} />
  );
};

export default Markdown;
