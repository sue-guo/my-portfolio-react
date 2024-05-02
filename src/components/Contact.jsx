import styles from "./Contact.module.css";
import {getImageUrl} from "../utils";
function Contact() {
    return(
        <footer className={styles.container} id="contact">
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to contact me</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl('contact/email.png')} alt="Email icon"></img>
                    <a href="mailto:guo00135@algonquinlive.com">guo00135@algonquinlive.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl('contact/linkedin.png')} alt="Linkedin icon"></img>
                    <a href="https://www.linkedin.com/in/hongxiu-guo-3990282b3/" target="_blank">Linkedin</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl('contact/github.png')} alt="GitHub icon"></img>
                    <a href="https://github.com/sue-guo" target="_blank">github.com/sue-guo</a>
                </li>
            </ul>
        </footer>

    );
}
export default Contact;