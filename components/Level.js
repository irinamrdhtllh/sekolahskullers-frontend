import Image from 'next/image';

import styles from '../styles/components/Level.module.scss';

export default function Level({ level_logo, level }) {
  return (
    <div className={styles.level}>
      <Image className={styles.image} src={level_logo} height="40" width="40" alt="image"/>
      <p>{level}</p>
    </div>
  );
}
