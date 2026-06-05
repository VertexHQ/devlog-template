import styles from '../styles/ProjectCard.module.css';

export default function ProjectCard({ project }) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.folderIcon}>{project.icon}</div>
      <h3 className={styles.projectTitle}>{project.title}</h3>
      <p className={styles.projectDesc}>{project.description}</p>
      <div className={styles.projectTech}>
        {project.tech.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>
    </div>
  );
}
