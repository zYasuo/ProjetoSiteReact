import React, { useState, useEffect, useRef } from 'react';
import styles from '../css/Menu.module.css';
import logo from '../img/logoBrancoNR.png'; 
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import TopHeader from './topHeader';

const DropdownMenu = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown} onMouseLeave={handleMouseLeave}>
      <button
        className={`${styles.dropdownButton} ${isOpen ? styles.open : ''}`}
        onMouseEnter={handleMouseEnter}
        onClick={() => setIsOpen(!isOpen)}
      >
        {label} {isOpen ? <FaAngleUp className={styles.iconAlign} /> : <FaAngleDown className={styles.iconAlign} />}
      </button>
      <div className={`${styles.dropdownContent} ${isOpen ? styles.open : ''}`}>{children}</div>
    </div>
  );
};

const Menu = () => {
  const [isTop, setIsTop] = useState(true);
  const headerRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.pageYOffset <= headerRef.current.offsetHeight);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={headerRef}>
      <TopHeader isTop={isTop} />
      <div className={`${styles.menu} ${isTop ? '' : styles.sticky}`}>
        <img className={styles.logo} src={logo} alt="Logo" />
        <div className={styles.menuItems}>
          <a className={styles.link} href="#item1">Inicio</a>
          <DropdownMenu label="Planos">
            <a className={styles.dropdownItem} href="#residential">Planos Residenciais</a>
            <a className={styles.dropdownItem} href="#business">Plano Business</a>
            <a className={styles.dropdownItem} href="#gamer">Plano Gamer</a>
            <a className={styles.dropdownItem} href="#access">Plano Access</a>
          </DropdownMenu>
          <a className={styles.link} href="#item3">Vantagens</a>
          <a className={styles.link} href="#item4">Empresa</a>
          <a className={styles.link} href="#item5">Politicas</a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
