import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Popover } from '@headlessui/react';
import Link from 'next/link';

import Button from '../components/Button';
import useWindowDimensions from '../hooks/useWindowDimensions';
import styles from '../styles/layout/Nav.module.scss';

export default function Nav({ children }) {
  return (
    <Popover.Panel static as="nav" className={styles.nav}>
      <div className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/class-year/">Angkatan</Link>
        <Link href="/groups">Kelas</Link>
        <Link href="/students/">Peserta</Link>
      </div>
      {children}
    </Popover.Panel>
  );
}

export function AuthNav({ toggleOpen }) {
  const { width } = useWindowDimensions();

  const user = (
    <FontAwesomeIcon className={styles.icons} icon="user" size="md" />
  );

  return (
    <>
      <div className={`${styles.container} ${styles.container1}`}>
        <Popover>
          {({ open }) => (
            <>
              <Popover.Button as="div" className={styles.button}>
                <Button href="" name={user} />
              </Popover.Button>
              {((toggleOpen && width < 768) || open) && (
                <Popover.Panel
                  static
                  as="div"
                  className={`${styles.links} ${styles.dropdown}`}
                >
                  <Link href="/profile/">Profil</Link>
                  <Link href="/profile/group/">Profil Kelas</Link>
                </Popover.Panel>
              )}
            </>
          )}
        </Popover>
        <Button href="/auth/logout/" name="Logout" />
      </div>
    </>
  );
}

export function AnonymousNav() {
  return (
    <div className={`${styles.container} ${styles.container2}`}>
      <Button href="/auth/login/" name="Login" />
      <Button href="/auth/register/" name="Register" />
    </div>
  );
}
