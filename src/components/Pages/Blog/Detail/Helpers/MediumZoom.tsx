import { useDidMount } from 'beautiful-react-hooks';
import mediumZoom from 'medium-zoom';

const MediumZoom = () => {
  useDidMount(() => {
    mediumZoom('[data-markdown] img', { margin: 25 });
  });

  return null;
};

export default MediumZoom;
