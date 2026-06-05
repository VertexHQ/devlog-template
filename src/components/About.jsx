import styles from '../styles/About.module.css';
import { techStack } from '../data';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <h2 className={styles.sectionTitle}>01. About Me</h2>
      <div className={styles.aboutContent}>
        <div className={styles.bio}>
          <p>
            Hello. I'm a software engineer based in the cloud. I enjoy creating calm, efficient, and aesthetic digital experiences. My work bridges the gap between clean code and atmospheric design.
          </p>
          <p>
            When I'm not coding, I'm usually curating lo-fi playlists or watching sci-fi anime.
          </p>
        </div>
        <div className={styles.techStackContainer}>
          <p style={{ marginBottom: '1rem', color: '#fff' }}>Technologies:</p>
          <div className={styles.techStack}>
            {techStack.map((tech, index) => (
              <span key={index} className={styles.techTag}>{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
