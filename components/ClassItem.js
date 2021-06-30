import styles from '../styles/components/ClassItem.module.scss';

export default function ClassItem({ number, class_logo, class_name, level_logo, level, health, exp }) {
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
        <img src={level_logo} alt="image" className={styles.image}/>
        <p>{level}</p>
      </div>
      <div className={styles.bar}>
        <p>HP: {health}</p>
        <p>XP: {exp}</p>
      </div>
    </div>
  );
}
