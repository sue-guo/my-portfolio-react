import styles from "./Project.module.css";
import { getImageUrl } from "../utils";
import projects  from "../data/project.json";

function Project() {
  return (
    <section className={styles.container} id="projects">
        <h2 className={styles.title}>Project</h2>
        <div className={styles.projectlist}>
        {
            projects.map((project,index)=>{
                return (
                    <div key={index} className={styles.project}>
                        <img src={getImageUrl(project.imagePath)} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p className={styles.description}>{project.description}</p>
                        <ul className={styles.skills}>
                            {
                                project.technologies.map((technology,index)=>{
                                    return <li key={index} className={styles.skill}>{technology}</li>
                                })
                            }
                        </ul>
                        <div className={styles.links}>
                            {project.projectLink === "" ? null :<a href={project.projectLink} className={styles.link}  target="_blank">Link</a>}
                            {project.source === "" ? null :<a href={project.source} className={styles.link}  target="_blank">Source</a>}
                            
                            {/* 
                            <a href={project.projectLink} className={styles.link}  target="_blank">Link</a>
                            <a href={project.source} className={styles.link}>Source</a> */}
                        </div>
                    </div>
                )
            })
        }
        </div>
    </section>
  );
}
export default Project;