import { useDidMount } from 'beautiful-react-hooks';
import { format } from 'date-fns';
import React, { useState } from 'react';

import styles from './styles.module.css';

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
  ['wm-received']: string;
}

interface Props {
  urls: string[];
}

const Webmentions = (props: Props) => {
  const { urls } = props;
  const [webmentions, setWebMentions] = useState<Webmention[]>([]);

  useDidMount(() => {
    for (const url of urls) {
      fetch(
        `https://webmention.io/api/mentions.jf2?per-page=100&page=0&target=${encodeURI(
          url,
        )}`,
      ).then(async (response) => {
        const { children } = (await response.json()) || {};

        if (!Array.isArray(children)) {
          return;
        }

        const cleanedWebmentions: Webmention[] = [];
        for (const webmention of children) {
          if (webmention.type !== 'entry') {
            continue;
          }

          const urls = cleanedWebmentions.map((webmention) => webmention.url);
          if (urls.includes(webmention.url)) {
            continue;
          }

          cleanedWebmentions.push({
            ...webmention,
            published: new Date(
              webmention.published || webmention['wm-received'],
            ),
          });
        }

        cleanedWebmentions.sort((a: Webmention, b: Webmention) =>
          a.published > b.published ? -1 : 1,
        );

        setWebMentions([...webmentions, ...cleanedWebmentions]);
      });
    }
  });

  if (webmentions.length === 0) {
    return null;
  }

  const likes = webmentions.filter(
    (webmention) => webmention['wm-property'] === 'like-of',
  );

  const other = webmentions.filter(
    (webmention) => webmention['wm-property'] !== 'like-of',
  );

  return (
    <div className={styles.webmentions}>
      <h2>Webmentions</h2>
      <ul>
        {likes.length > 0 && (
          <li>
            <a
              className={styles.likes}
              target="_blank"
              rel="noopener noreferrer"
              href={likes[0].url}
            >
              <div
                className={styles.heads}
                style={{
                  paddingLeft: `${
                    (likes.length > 7 ? 7 : likes.length) * 1.35 + 2.25
                  }em`,
                }}
              >
                {likes
                  .reverse()
                  .slice(likes.length > 7 ? likes.length - 7 : 0, likes.length)
                  .map((webmention: Webmention, index: number) => (
                    <span
                      className={styles.head}
                      style={{
                        left: `${index * 1.35}rem`,
                        backgroundImage: `url(${webmention.author.photo})`,
                      }}
                      key={`like-${index}`}
                    />
                  ))}
              </div>
              <div>
                liked by <strong>{likes.reverse()[0].author.name}</strong>
                {likes.length === 2 && 'and 1 other'}
                {likes.length > 2 && `and ${likes.length - 1} others`}
              </div>
            </a>
          </li>
        )}
        {other.map((webmention: Webmention, index: number) => (
          <li key={index}>
            <a
              className={styles.author}
              target="_blank"
              rel="noopener noreferrer"
              href={webmention.url}
            >
              <span>
                <span
                  className={styles.head}
                  style={{ backgroundImage: `url(${webmention.author.photo})` }}
                />
                <strong>{webmention.author.name}</strong>
              </span>
              <span className={styles.content}>
                <strong>{webmention.author.name}</strong>
                {webmention['wm-property'] === 'mention-of' && 'mentioned'}
                {webmention['wm-property'] === 'in-reply-to' && 'replied'}
                {webmention['wm-property'] === 'repost-of' && 'retweeted'}
                {webmention.published.getTime() > 0 &&
                  ` on ${format(webmention.published, 'MMM d, yyyy')}`}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Webmentions;
