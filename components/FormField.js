import styles from '../styles/components/FormField.module.scss'

export default function FormField({ label, type, id }) {
  return (
    <div className={styles.form}>
      <p>{label}</p>
      <input 
        className={styles.input}
        type={type} 
        id={id}
      />
    </div>
  );
}
