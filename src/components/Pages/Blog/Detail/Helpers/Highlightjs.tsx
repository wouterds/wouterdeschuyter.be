import hljs from 'highlight.js';
import { useAmp } from 'next/amp';
import Head from 'next/head';
import React from 'react';
import { useEffect } from 'react';

const HighlightJS = () => {
  const isAmp = useAmp();

  useEffect(() => {
    document
      .querySelectorAll('pre code')
      .forEach((block) => hljs.highlightBlock(block));
  }, []);

  if (isAmp) {
    return null;
  }

  return (
    <Head>
      <link rel="stylesheet" href="/static/highlightjs-github.css" />
    </Head>
  );
};

export default HighlightJS;
