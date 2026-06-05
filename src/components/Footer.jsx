import styles from '../styles/Footer.module.css';
import { socialLinks } from '../data';

export default function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.socialLinks}>
        {socialLinks.map((link, index) => (
          <a key={index} href={link.url} className={styles.socialLink}>
            {link.name}
          </a>
        ))}
      </div>
      <p>Designed &amp; Built by [Your Name] © 2023</p>
    </footer>
  );
}
