import { format } from 'date-fns';
import { useAmp } from 'next/amp';
import Link from 'next/link';
import React from 'react';

import styles from './styles.module.scss';

export type Post = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
};

interface Props {
  posts: Post[];
}

const Posts = (props: Props) => {
  const isAmp = useAmp();
  const { posts } = props;

  return (
    <div className={styles.posts}>
      {posts.map((post) => (
        <div key={post.id} className={styles.post}>
          <Link
            href="/blog/[slug]"
            as={`/blog/${post.slug}${isAmp ? '?amp=1' : ''}`}
          >
            <a>
              <header>
                <time
                  dateTime={new Date(parseInt(post.publishedAt)).toISOString()}
                >
                  {format(new Date(parseInt(post.publishedAt)), 'MMM d, yyyy')}
                </time>

                <h2>{post.title}</h2>
              </header>
              <p>{post.excerpt}</p>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Posts;
