import { format } from 'date-fns';
import Link from 'next/link';
import React from 'react';

import styles from './styles.module.css';

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
  const { posts } = props;

  return (
    <>
      {posts.map((post) => (
        <div key={post.id} className={styles.post}>
          <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
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
    </>
  );
};

export default Posts;
