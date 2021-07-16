import Image from 'next/image';

import styles from '../styles/components/ClassItem.module.scss';
import Level from './Level.js';
import ProgressBar from './ProgressBar.js';

export default function ClassItem({ number, class_logo, class_name, level_logo, level, health_bar, health_style, exp_bar, exp_style }) {
  const health = "HP";
  const exp = "XP";

  return (
    <div className={styles.classitem}>
      <div className={styles.class}>
        <div className={styles.number}>
          <p>{number}</p>
        </div>
        <div className={styles.profile}>
          <Image src={class_logo} width={72} height={72} alt="image" className={styles.image}/>
          <p>{class_name}</p>
        </div>
      </div>
      <div className={styles.level}>
        <Level level_logo={level_logo} level={level}/>
      </div>
      <div className={styles.bars}>
        <div className={styles.bar}>
          <ProgressBar progress={health} bar={health_bar} bar_style={health_style}/>
        </div>
        <div className={styles.bar}>
          <ProgressBar progress={exp} bar={exp_bar} bar_style={exp_style}/>
        </div>
      </div>
    </div>
  );
}
