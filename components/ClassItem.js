import styles from '../styles/components/ClassItem.module.scss';
import ProgressBar from './ProgressBar.js';
import Level from './Level.js';

export default function ClassItem({ number, class_logo, class_name, level_logo, level, health_bar, health_style, exp_bar, exp_style }) {
  const health = "HP";
  const exp = "XP";

  return (
    <div className={styles.classitem}>
      <div className={styles.class}>
        <div className={styles.number}>
          <p>{number}</p>
        </div>
        <img src={class_logo} alt="image" className={styles.image}/>
        <div className={styles.class_name}>
          <p>{class_name}</p>
        </div>
      </div>
      <div className={styles.level}>
        <Level level={level}/>
      </div>
      <div className={styles.bars}>
        <ProgressBar progress={health} bar={health_bar} bar_style={health_style}/>
        <ProgressBar progress={exp} bar={exp_bar} bar_style={exp_style}/>
      </div>
    </div>
  );
}
