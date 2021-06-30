import styles from '../styles/components/ProgressBar.module.scss';

export default function ProgressBar({ progress, bar }) {
  return (
    <div className={styles.progress_bar}>
      <p>{progress}</p>
      <div className={styles.bar_holder}>
        <div className={styles.bar}>{bar}</div>
      </div>
    </div>
  );
}
