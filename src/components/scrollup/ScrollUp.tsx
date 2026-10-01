import React, {useEffect, useState} from 'react';

export default function ScrollUp(){
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll, {passive: true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <a className="scrollup" href="#home" aria-label="Scroll to top">
      ↑
    </a>
  );
}