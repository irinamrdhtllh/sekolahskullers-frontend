import Link from 'next/link';

import styles from '../styles/components/Button.module.scss';

export default function Button({ name, href, custom }) {
  return (
    <Link href={href} passHref>
      <a className={`${styles.button} ${custom && styles.custom}`}>{name}</a>
    </Link>
  );
}
