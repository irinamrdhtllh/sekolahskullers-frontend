import styles from '../styles/components/ProgressBar.module.scss';

export default function ProgressBar({ progress, bar, bar_style}) {
  return (
    <div className={styles.progress_bar}>
      <p>{progress}</p>
      <div className={styles.wrapper}>
        <div className={styles.bar_holder}>
          <div className={styles.bar} style={bar_style}>{bar}</div>
        </div>
      </div>
    </div>
  );
}
