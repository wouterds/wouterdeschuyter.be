import { useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

const MediumZoom = () => {
  useEffect(() => {
    document
      .querySelectorAll('pre code')
      .forEach(block => hljs.highlightBlock(block));
  }, []);

  return null;
};

export default MediumZoom;
