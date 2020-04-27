import 'highlight.js/styles/github.css';

import hljs from 'highlight.js';
import { useEffect } from 'react';

const HighlightJS = () => {
  useEffect(() => {
    document
      .querySelectorAll('pre code')
      .forEach((block) => hljs.highlightBlock(block));
  }, []);

  return null;
};

export default HighlightJS;
