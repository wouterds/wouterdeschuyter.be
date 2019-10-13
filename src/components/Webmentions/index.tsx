import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { format } from 'date-fns';
import { Container } from './styles';

interface Webmention {
  type: string;
  author: {
    name: string;
    photo: string;
    url: string;
  };
  published: Date;
  url: string;
  ['wm-property']: 'repost-of' | 'like-of' | 'in-reply-to' | 'mention-of';
}

interface Props {
  url: string;
}

const Webmentions = (props: Props) => {
  const { url } = props;
  const [webmentions, setWebMentions] = useState<Webmention[]>([]);

  useEffect(() => {
    fetch(
      `https://webmention.io/api/mentions.jf2?target=${encodeURI(url)}`,
    ).then(async response => {
      const { children } = (await response.json()) || {};

      if (!Array.isArray(children)) {
        return;
      }

      const cleanedWebmentions: Webmention[] = [];
      for (const webmention of children) {
        if (webmention.type !== 'entry') {
          continue;
        }

        const urls = cleanedWebmentions.map(webmention => webmention.url);
        if (urls.includes(webmention.url)) {
          continue;
        }

        cleanedWebmentions.push({
          ...webmention,
          published: new Date(webmention.published),
        });
      }

      cleanedWebmentions.sort((a: Webmention, b: Webmention) =>
        a.published > b.published ? -1 : 1,
      );

      setWebMentions(cleanedWebmentions);
    });
  }, [url]);

  if (webmentions.length === 0) {
    return null;
  }

  return (
    <Container>
      <h2>Webmentions</h2>
      <ul>
        {webmentions.map((webmention: Webmention, index: number) => (
          <li key={index}>
            <a
              className="author"
              target="_blank"
              rel="noopener noreferrer"
              href={webmention.url}
            >
              <img src={webmention.author.photo} alt={webmention.author.name} />
              <strong>{webmention.author.name}</strong>
            </a>
            <a
              className="content"
              target="_blank"
              rel="noopener noreferrer"
              href={webmention.url}
            >
              {webmention['wm-property'] === 'like-of' && 'liked'}
              {webmention['wm-property'] === 'mention-of' && 'mentioned'}
              {webmention['wm-property'] === 'in-reply-to' && 'replied'}
              {webmention['wm-property'] === 'repost-of' && 'retweeted'}
              {webmention.published.getTime() > 0 &&
                ` on ${format(webmention.published, 'MMM d, yyyy')}`}
            </a>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Webmentions;
