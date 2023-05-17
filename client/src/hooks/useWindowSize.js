import { useState, useEffect } from 'react';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    const resizeHandler = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', resizeHandler);

    resizeHandler();

    // On dismount, remove event listener
    return () => window.removeEventListener('resize', resizeHandler);
  }, []);

  return windowSize;
};

export default useWindowSize;
