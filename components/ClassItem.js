import { capitalCase } from 'change-case';
import Image from 'next/image';

import styles from '../styles/components/ClassItem.module.scss';
import Level from './Level.js';
import ProgressBar from './ProgressBar.js';

export default function ClassItem({
  student,
  weekly,
  number,
  status,
  class_logo,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.class}>
        <div className={styles.number}>
          <p>{number}</p>
        </div>
        <div className={styles.photo}>
          <Image src={class_logo} width={72} height={72} alt="image" />
        </div>
      </div>
      <div className={styles.wrapper}>
        <p className={styles.name}>
          {student ? capitalCase(`${status.first_name} ${status.last_name}`) : status.name}
        </p>
        <div className={styles.profile}>
          <div className={styles.level}>
            <Level
              classitem
              level_logo={
                student
                  ? `/level/peserta/${status.level?.display.toLowerCase()}.png`
                  : `/level/kelas/${status.level?.display.toLowerCase()}.png`
              }
              level={status.level?.display}
            />
          </div>
          <div className={styles.exp}>
            <p>HP <span>{status.health}</span></p>
            <p>XP <span>{weekly ? status.weekly_exp : status.exp}</span></p>
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
                bar={weekly ? status.weekly_exp : status.exp}
                width={{ width: `${status.relative_exp}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
