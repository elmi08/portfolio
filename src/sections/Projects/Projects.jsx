import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import logoImage from '../../assets/logo.png'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={logoImage}
          link="https://github.com/elmi08/notes-app.git"
          h3="Developed and Deployed Fast-Note-App to Microk8s"
          p="Note-Taking App"
        />
      </div>
    </section>
  );
}

export default Projects;
