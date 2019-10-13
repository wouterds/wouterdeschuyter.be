import { useEffect } from 'react';
import mediumZoom from 'medium-zoom';

const MediumZoom = () => {
  useEffect(() => {
    mediumZoom('.media--image img', { margin: 25 });
  }, []);

  return null;
};

export default MediumZoom;
