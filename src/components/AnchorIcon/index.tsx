import styles from "./anchorIcon.module.css";

interface AnchorIconProps {
  href: string;
  icon: string;
  alt: string;
}

export const AnchorIcon = ({ href, icon, alt }: AnchorIconProps) => (
  <a className={styles.anchor} href={href} target="_blank">
    <img className={styles.image} src={icon} alt={alt} />
  </a>
);
