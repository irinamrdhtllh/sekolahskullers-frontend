import Image from 'next/image';

import styles from '../styles/components/ClassItem.module.scss';
import Level from './Level.js';
import ProgressBar from './ProgressBar.js';

export default function ClassItem({ number, status, class_logo, health, exp }) {
  return (
    <div className={styles.classitem}>
      <div className={styles.class}>
        <div className={styles.number}>
          <p>{number}</p>
        </div>
        <div className={styles.profile}>
          <Image
            src={class_logo}
            width={72}
            height={72}
            alt="image"
            className={styles.image}
          />
          <p>{status.name}</p>
        </div>
      </div>
      <div className={styles.level}>
        <Level
          level_logo={`/level/kelas/${status.level?.display.toLowerCase()}.png`}
          level={status.level?.display}
        />
      </div>
      <div className={styles.bars}>
        <div className={styles.bar}>
          <ProgressBar
            health
            progress="HP"
            bar={status.health}
            width={{ width: `${health}` }}
          />
        </div>
        <div className={styles.bar}>
          <ProgressBar
            exp
            progress="XP"
            bar={status.exp}
            width={{ width: `${exp}` }}
          />
        </div>
      </div>
    </div>
  );
}
