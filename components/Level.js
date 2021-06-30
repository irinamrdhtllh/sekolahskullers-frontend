import styles from '../styles/components/Level.module.scss';

export default function Level({ level_logo, level }) {
  return (
    <div class={styles.level}>
      <img src={level_logo} alt="image"/>
      <p>{level}</p>
    </div>
  );
}
