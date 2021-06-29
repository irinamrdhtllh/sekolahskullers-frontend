import styles from '../styles/components/FormField.module.scss'

export default function FormField({ label, type }) {
  <div>
    <p>{label}</p>
    <input type={type}>
  </div>
}
