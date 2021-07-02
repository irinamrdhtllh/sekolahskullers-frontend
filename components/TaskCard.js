import styles from '../styles/components/TaskCard.module.scss';
import Link from 'next/link';

export default function TaskCard({ task_name, max_exp, exp, deadline, href }) {
  return (
    <div class={styles.task_card}>
      <div class={styles.task}>
        <p>{task_name}</p>
        <div class={styles.date}>
          <p>{deadline}</p>
          <a href={href}>Classroom</a>
        </div>
      </div>
      <div class={styles.score}>
        <div class={styles.triangle1}>
          <div class={styles.triangle1_text}>{exp}</div>
        </div>
        <div class={styles.triangle2}>
          <div class={styles.triangle2_text}>{max_exp}</div>
        </div>
      </div>
    </div>
  );
}
