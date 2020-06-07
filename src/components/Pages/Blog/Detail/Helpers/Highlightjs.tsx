import hljs from 'highlight.js';
import Head from 'next/head';
import React from 'react';
import { useEffect } from 'react';

const HighlightJS = () => {
  useEffect(() => {
    document
      .querySelectorAll('pre code')
      .forEach((block) => hljs.highlightBlock(block));
  }, []);

  return (
    <Head>
      <link rel="stylesheet" href="/static/highlightjs-github.css" />
    </Head>
  );
};

export default HighlightJS;
