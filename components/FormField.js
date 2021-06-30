import styles from '../styles/components/FormField.module.scss'

export default function FormField({ label, type }) {
  return (
    <div className={styles.form}>
      <p>{label}</p>
      <input type={type} className={styles.input}/>
    </div>
  );
}
