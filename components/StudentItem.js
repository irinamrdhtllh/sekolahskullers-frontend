import { capitalCase } from 'change-case';
import Image from 'next/image';

import styles from '../styles/components/StudentItem.module.scss';
import Level from './Level.js';
import ProgressBar from './ProgressBar.js';

export default function StudentItem({
  src,
  status,
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
        <p className={styles.name}>
          {capitalCase(`${status.first_name} ${status.last_name}`)}
        </p>
        {leaderboard && (
          <div className={styles.info}>
            <div className={styles.level}>
              <Level
                classitem
                level_logo={`/level/peserta/${status.level?.display.toLowerCase()}.png`}
                level={status.level?.display}
              />
            </div>
            <div className={styles.bars}>
              <div className={styles.bar}>
                <ProgressBar
                  classitem
                  health
                  progress="HP"
                  bar={status.health}
                  width={{ width: `${status.health}%` }}
                />
              </div>
              <div className={styles.bar}>
                <ProgressBar
                  classitem
                  exp
                  progress="XP"
                  bar={status.exp}
                  width={{ width: `${status.relative_exp}%` }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
