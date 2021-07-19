import Image from 'next/image';

import styles from '../styles/components/Level.module.scss';

export default function Level({ level_logo, level, classitem }) {
  return (
    <div className={`${styles.level} ${classitem && styles.classitem}`}>
      <div className={styles.image}>
        <Image src={level_logo} height="40" width="40" alt="image" />
      </div>
      <p>{level}</p>
    </div>
  );
}
