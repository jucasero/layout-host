import styles from "./style.module.css";

interface AppProps {
  number: number;
}

export const App = ({ number }: AppProps) => (
  <h1 className={styles.app}>estes es el numero {number}</h1>
);
