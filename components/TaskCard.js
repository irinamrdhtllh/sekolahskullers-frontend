import styles from '../styles/components/TaskCard.module.scss';

export default function TaskCard({ task_name, max_exp, exp, deadline, href }) {
  return (
    <div className={styles.task_card}>
      <div className={styles.wrapper}>
        <div className={styles.task}>
          <p>{task_name}</p>
          <div className={styles.date}>
            <p>{deadline}</p>
            <a href={href} target="_blank" rel="noreferrer">Classroom</a>
          </div>
        </div>
      </div>
      <div className={styles.score}>
        <div className={styles.triangle1}>
          <div className={styles.triangle1_text}>{exp}</div>
        </div>
        <div className={styles.triangle2}>
          <div className={styles.triangle2_text}>{max_exp}</div>
        </div>
      </div>
    </div>
  );
}
