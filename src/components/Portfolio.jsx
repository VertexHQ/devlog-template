import styles from '../styles/Portfolio.module.css';
import ProjectCard from './ProjectCard';
import { portfolioProjects } from '../data';

export default function Portfolio() {
  return (
    <section id="portfolio" className={styles.portfolio}>
      <h2 className={styles.sectionTitle}>02. Selected Projects</h2>
      <div className={styles.grid}>
        {portfolioProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
