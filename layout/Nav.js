import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Popover } from '@headlessui/react';

import Button from '../components/Button';
import NavLink from '../components/NavLink';
import { useAuth } from '../hooks/useAuth';
import useWindowDimensions from '../hooks/useWindowDimensions';
import styles from '../styles/layout/Nav.module.scss';

export default function Nav({ children }) {
  return (
    <Popover.Panel static as="nav" className={styles.nav}>
      <NavLink name="Home" href="/" />
      <NavLink name="Angkatan" href="/angkatan" />
      <NavLink name="Kelas" href="/kelas" />
      <NavLink name="Peserta" href="/peserta" />
      {children}
    </Popover.Panel>
  );
}

export function AuthNav({ toggleOpen }) {
  const { width } = useWindowDimensions();
  const {
    user: { group },
  } = useAuth();

  const user = (
    <FontAwesomeIcon className={styles.icons} icon="user" size="lg" />
  );

  return (
    <>
      <Popover as="div" className={styles.container}>
        {({ open }) => (
          <>
            <Popover.Button as="div" className={styles.profileButton}>
              <Button href="" name={user} custom />
            </Popover.Button>
            {((toggleOpen && width <= 640) || open) && (
              <Popover.Panel static as="div" className={styles.dropdown}>
                <NavLink name="Profil" href="/profil" custom />
                {group() && (
                  <NavLink name="Profil Kelas" href="/profil-kelas" custom />
                )}
              </Popover.Panel>
            )}
          </>
        )}
      </Popover>
      <Button href="/auth/logout/" name="Logout" />
    </>
  );
}

export function AnonymousNav() {
  return (
    <>
      <Button href="/auth/login/" name="Login" />
      <Button href="/auth/register/" name="Register" />
    </>
  );
}
