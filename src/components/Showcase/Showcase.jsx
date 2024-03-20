import ProjectCard from "./ProjectCard";

import { projects } from "../App/projects";
import styles from "./styles.module.css";

function Showcase({ setPage }) {
  return (
    <div className={styles.wrapper}>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          imgUrl={project.imgUrl}
          tags={project.tags}
          onClick={() => setPage(project.id)}
        />
      ))}
    </div>
  );
}

export default Showcase;
