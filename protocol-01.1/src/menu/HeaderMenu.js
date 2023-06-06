import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import TopHeader from './topHeader';

const HeaderMenu = () => {
  const [isTop, setIsTop] = useState(true);
  
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY < 100;
      if (show !== isTop) {
        setIsTop(show);
      }
    }

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [isTop]);

  return (
    <div>
      <TopHeader isTop={isTop} />
      <Menu isTop={!isTop} />
    </div>
  );
};

export default HeaderMenu;
