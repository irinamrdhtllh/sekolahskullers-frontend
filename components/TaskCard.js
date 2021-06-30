import styles from '../styles/components/TaskCard.module.scss';
import Link from 'next/link';

export default function TaskCard( task, max_exp, exp, deadline, href ) {
  return (
    <div className={styles.task_card}>
      <h1>{task}</h1>
      <p>{exp}/{max_exp}</p>
      <p>{deadline}</p>
      <Link href={href}>Classroom</Link>
    </div>
  );
}
