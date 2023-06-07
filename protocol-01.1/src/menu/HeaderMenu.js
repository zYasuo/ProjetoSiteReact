import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import ResponsiveMenu from './ResponsiveMenu';
import TopHeader from './topHeader';
import styles from '../css/HeaderMenu.module.css';

const HeaderMenu = () => {
  const [isTop, setIsTop] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY < 100;
      if (show !== isTop) {
        setIsTop(show);
      }
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {windowWidth <= 768 ? (
        <div>
          <TopHeader isTop={isTop} />
          <ResponsiveMenu isTop={isTop} />
        </div>
      ) : (
        <div>
          <Menu />
        </div>
      )}
    </div>
  );
};

export default HeaderMenu;
