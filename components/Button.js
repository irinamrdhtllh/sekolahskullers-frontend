import styles from '../styles/components/Button.module.scss';
import Link from 'next/link';

export default function Button({ href, name }) {
  return (
    <div className={styles.button}>
      <a href={href} className={styles.link}>{name}</a>
    </div>
  );
}
