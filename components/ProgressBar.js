import styles from '../styles/components/ProgressBar.module.scss';

export default function ProgressBar({
  profile,
  classitem,
  progress,
  bar,
  health,
  exp,
  assessment,
  width,
}) {
  return (
    <div
      className={`${styles.progress_bar} ${profile && styles.profile} ${
        classitem && styles.classitem
      }`}
    >
      <p>{progress}</p>
      <div className={styles.wrapper}>
        <div className={styles.bar_holder}>
          <div
            className={`${styles.bar} ${health && styles.health} ${
              exp && styles.exp
            } ${{ assessment } && styles[assessment]}`}
            style={width}
          >
            <p>{bar}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
