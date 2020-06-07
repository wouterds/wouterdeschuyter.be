import mediumZoom from 'medium-zoom';
import { useEffect } from 'react';

const MediumZoom = () => {
  useEffect(() => {
    mediumZoom('[data-markdown] img', { margin: 25 });
  }, []);

  return null;
};

export default MediumZoom;
