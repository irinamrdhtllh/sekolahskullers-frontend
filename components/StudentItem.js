import Image from 'next/image';

import styles from '../styles/components/StudentItem.module.scss';

export default function StudentItem({ src, student }) {
  return (
    <div className={styles.card}>
      <Image className={styles.img} src={src} width="200" height="200" alt="image" />
      <div className={styles.student}>
        <p>{student}</p>
      </div>
    </div>
  );
}
