import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../utils";

function About(){
    return(
        <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
          
          <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
              <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
              <div className={styles.aboutItemText}>
                <h3>Frontend Developer</h3>
                <p>
                  As a full-stack developer, I have experience in both front-end and back-end development.
                  I have experience in building responsive
                  and optimized sites.
                </p>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
              <div className={styles.aboutItemText}>
                <h3>Backend Developer</h3>
                <p>
                  As a full-stack developer, I have experience in both front-end and back-end development,
                  skilled in Java, web, and database management.
                </p>
              </div>
            </li>
          </ul>
          <img
            src={getImageUrl("about/aboutImg.png")}
            alt="Me sitting with a laptop"
            className={styles.aboutImage}
          />
        </div>
      </section>
    );
}
export default About;
