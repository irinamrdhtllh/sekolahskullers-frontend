import Image from 'next/image';

import styles from '../styles/components/StudentItem.module.scss';

export default function StudentItem({
  src,
  student,
  width,
  height,
  leaderboard,
  group,
}) {
  return (
    <div
      className={`${styles.card} ${leaderboard && styles.leaderboard} ${
        group && styles.group
      }`}
    >
      <Image src={src} width={width} height={height} alt="image" />
      <div className={styles.student}>
        <p>{student}</p>
      </div>
    </div>
  );
}
