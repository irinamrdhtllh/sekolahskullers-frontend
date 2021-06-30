import styles from '../styles/components/ClassItem.module.scss';
import ProgressBar from './ProgressBar.js';
import Level from './Level.js';

export default function ClassItem({ number, class_logo, class_name }) {
  const health = "HP";
  const health_bar = "60%";
  const exp = "XP";
  const exp_bar = "60%";

  const level = "First Mate";

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
        <ProgressBar progress={health} bar={health_bar}/>
        <ProgressBar progress={exp} bar={exp_bar}/>
      </div>
    </div>
  );
}
