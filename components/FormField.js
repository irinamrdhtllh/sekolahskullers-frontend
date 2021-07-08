import styles from '../styles/components/FormField.module.scss'

export default function FormField({ label, type, id, name, onBlur, onChange, value, error }) {
  return (
    <div className={styles.form}>
      <label className={styles.formLabel} htmlFor={id}>{label}</label>
      <input 
        className={styles.input}
        type={type} 
        id={id}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      {{error} && <div className={styles.error}>{error}</div>}
    </div>
  );
}
