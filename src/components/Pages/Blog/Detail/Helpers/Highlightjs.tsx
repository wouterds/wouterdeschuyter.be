import { useDidMount } from 'beautiful-react-hooks';
import hljs from 'highlight.js';
import Head from 'next/head';
import React from 'react';

const HighlightJS = () => {
  useDidMount(() => {
    (document.querySelectorAll(
      'pre code',
    ) as any).forEach((block: HTMLElement) => hljs.highlightBlock(block));
  });

  return (
    <Head>
      <link rel="stylesheet" href="/static/highlightjs-github.css" />
    </Head>
  );
};

export default HighlightJS;
