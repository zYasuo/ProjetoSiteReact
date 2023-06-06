import React from 'react';
import styles from '../css/TopHeader.module.css';
import { FaWhatsapp, FaPhone, FaFileAlt, FaUser } from 'react-icons/fa';

const TopHeader = ({ isScrollingDown }) => (
  <nav className={`${styles.topHeader} ${isScrollingDown ? styles.hidden : ''}`}>
    <ul className={styles.contactInfo}>
      <li className={styles.contactItem}>
        <a href="https://api.whatsapp.com/phone-number" className={styles.contactLink}>
          <FaWhatsapp className={styles.icon} /> WhatsApp
        </a>
      </li>
      <li className={styles.contactItem}>
        <a href="tel:+551935359840" className={styles.contactLink}>
          <FaPhone className={styles.icon} /> (19) 3535 9840
        </a>
      </li>
      <li className={styles.contactItem}>
        <a href="tel:+ 08002001273" className={styles.contactLink}>
          <FaPhone className={styles.icon} />  0800 200 1273
        </a>
      </li>
      <li className={styles.contactItem}>
        <a href="/2a-via-boleto" className={styles.contactLink}>
          <FaFileAlt className={styles.icon} /> 2ª Via Boleto
        </a>
      </li>
      <li className={styles.contactItem}>
        <a href="/central-assinante" className={styles.contactLink}>
          <FaUser className={styles.icon} /> Central do Assinante
        </a>
      </li>
    </ul>
  </nav>
);

export default TopHeader;
