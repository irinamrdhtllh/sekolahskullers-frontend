import styles from '../styles/components/Button.module.scss';
import Link from 'next/link';

export default function Button({ href, name }) {
  return (
    <div>
      <Link href={href}>{name}</Link>
    </div>
  )
}
