import React, { useEffect } from 'react';
import hljs from 'highlight.js';
import CSS from './styles';

const HighlightJS = () => {
  useEffect(() => {
    document
      .querySelectorAll('pre code')
      .forEach(block => hljs.highlightBlock(block));
  }, []);

  return <CSS />;
};

export default HighlightJS;
