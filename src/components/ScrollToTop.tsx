import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Sometimes it's better to wrap in setTimeout to ensure it fires after render
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      // Also scroll the root element just in case
      const root = document.getElementById('root');
      if (root) root.scrollTo(0, 0);
      document.body.scrollTo(0, 0);
      document.documentElement.scrollTo(0, 0);
    }, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
