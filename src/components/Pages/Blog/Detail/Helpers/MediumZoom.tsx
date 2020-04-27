import mediumZoom from 'medium-zoom';
import { useEffect } from 'react';

const MediumZoom = () => {
  useEffect(() => {
    mediumZoom('.media--image img', { margin: 25 });
  }, []);

  return null;
};

export default MediumZoom;
