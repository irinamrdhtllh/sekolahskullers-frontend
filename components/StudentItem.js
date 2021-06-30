import styles from '../styles/components/StudentItem.module.scss';

export default function StudentItem({ image, student }) {
  return (
    <div class={styles.card}>
      <img src={image} alt="image" className={styles.img}/>
      <div class={styles.student}>
        <p>{student}</p>
      </div>
    </div>
  );
}
