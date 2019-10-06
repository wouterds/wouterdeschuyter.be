import React from 'react';
import Link from 'next/link';
import { useAmp } from 'next/amp';
import { format } from 'date-fns';
import { Container, Post } from './styles';

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
    <Container>
      {posts.map(post => (
        <Post key={post.id}>
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
        </Post>
      ))}
    </Container>
  );
};

export default Posts;
