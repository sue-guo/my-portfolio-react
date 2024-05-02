import { getImageUrl } from "../utils";
import styles from "./Exeperience.module.css";
import skills from "../data/skills";
import history from "../data/history";

function Experience() {
    return (
        <section className={styles.container} id="experience">
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.content}>
                <div className={styles.skills}>
                    {
                        skills.map((skill, id) => {
                            return (
                                <div key={id} className={styles.skill}>
                                    <div className={styles.skillImageContainer}>
                                        <img src={getImageUrl(skill.imgSrc)} alt={skill.title} />
                                    </div>
                                    <p>{skill.title}</p>
                                </div>
                                );
                        })
                    }
                </div>
                <ul className={styles.history}>
                    {
                        history.map((historyItem, index)=>{
                            return (    
                                <li key={index} className={styles.historyItem}>
                                    <img src={getImageUrl(historyItem.imgSrc)} alt={`${historyItem.company} Logo`} />
                                    <div className={styles.historyItemDetails}>
                                        <h3>{ `${historyItem.role}, ${historyItem.company}`}</h3>
                                        <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                        <ul>
                                            {
                                                historyItem.experiences.map((experience,index)=>{
                                                    return(
                                                        <li key={index}>{experience}</li>
                                                    );
                                                })
                                            }
                                        </ul>
                                    </div>
                                </li>
                            );
                        })

                    }
                </ul>
            </div>
        </section>
    );
}
export default Experience;