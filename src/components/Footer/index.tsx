import { AnchorIcon } from "../AnchorIcon";
import githubIcon from "../../assets/icons/githubIcon.svg";
import linkedinIcon from "../../assets/icons/linkedinIcon.svg";
import styles from "./footer.module.css";

export const Footer = () => (
  <footer className={styles.footer}>
    <AnchorIcon
      href="https://github.com/jucasero"
      alt="github icon"
      icon={githubIcon}
    />
    <AnchorIcon
      href="https://www.linkedin.com/in/jucasero"
      alt="linkedin icon"
      icon={linkedinIcon}
    />
  </footer>
);
