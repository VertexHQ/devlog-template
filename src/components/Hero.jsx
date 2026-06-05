import styles from '../styles/Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <h1 className={styles.heroGlitch}>I AM [NAME]</h1>
      <p className={styles.heroSubtitle}>&gt; Full Stack Developer // Night Owl</p>
      <a href="#portfolio" className={styles.heroBtn}>INITIALIZE_PROJECTS</a>
    </section>
  );
}
