import Link from 'next/link';

import styles from '../styles/components/NavLink.module.scss';

export default function NavLink({ name, href, custom }) {
  return (
    <Link href={href} passHref>
      <a className={`${styles.link} ${custom && styles.custom}`}>{name}</a>
    </Link>
  );
}
