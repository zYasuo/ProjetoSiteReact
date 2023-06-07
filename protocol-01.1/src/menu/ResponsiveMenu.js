import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import logo from '../img/logoBrancoNR.png'; 
import styles from '../css/ResponsiveMenu.module.css';

const ResponsiveMenu = ({ children }) => {
  const [open, setOpen] = useState(false);
  const node = useRef();

  const handleClickOutside = (e) => {
    if (node.current.contains(e.target)) {

      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const handleToggle = () => {
    setOpen(!open);
  }

  return (
    <div className={styles.menuContainer} ref={node}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={`${styles.logo} logoResponsive`}/>
      </div>
      <div className={styles.hamburgerMenu}>
        <FaBars className={styles.hamburgerIcon} onClick={handleToggle} />
      </div>
      <div className={`${styles.sidebar} ${open ? styles.open : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default ResponsiveMenu;
