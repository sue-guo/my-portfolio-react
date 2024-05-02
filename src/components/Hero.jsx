import styles from "./Hero.module.css";
import { getImageUrl } from "../utils";

function Hero() {
  return (
    <section className={styles.container}>
      <img
        className={styles.heroImage}
        src={getImageUrl("hero/hero.png")}
        alt="This is hero image of the author"
      />
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Hongxiu Guo</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 3 years of experience using Java and
          web. Reach out if you'd like learn more about me!
        </p>
        <a
          className={styles.contactBtn}
          href="mailto:sueguo123@gamil.com"
        >
          Contact Me
        </a>
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
}
export default Hero;
