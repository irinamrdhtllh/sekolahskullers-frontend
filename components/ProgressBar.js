import styles from '../styles/components/ProgressBar.module.scss';

export default function ProgressBar({
  progress,
  bar,
  health,
  exp,
  assessment,
  width,
}) {
  return (
    <div className={styles.progress_bar}>
      <p>{progress}</p>
      <div className={styles.wrapper}>
        <div className={styles.bar_holder}>
          <div
            className={`${styles.bar} ${health && styles.health} ${
              exp && styles.exp
            } ${{assessment} && styles[assessment]}`}
            style={width}
          >
            {bar}
          </div>
        </div>
      </div>
    </div>
  );
}
