import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <a href="#" className={styles.logo}>
        DEV<span>.LOG</span>
      </a>
      <ul className={styles.navLinks}>
        <li><a href="#hero">/HOME</a></li>
        <li><a href="#about">/ABOUT</a></li>
        <li><a href="#portfolio">/WORK</a></li>
        <li><a href="#contact">/CONTACT</a></li>
      </ul>
      <div className={styles.menuBtn}>☰</div>
    </nav>
  );
}
