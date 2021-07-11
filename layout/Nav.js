import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Popover } from '@headlessui/react';

import Button from '../components/Button';
import NavLink from '../components/NavLink';
import useWindowDimensions from '../hooks/useWindowDimensions';
import styles from '../styles/layout/Nav.module.scss';

export default function Nav({ children }) {
  return (
    <Popover.Panel static as="nav" className={styles.nav}>
      <NavLink name="Home" href="/" first />
      <NavLink name="Angkatan" href="/class-year" />
      <NavLink name="Kelas" href="/groups" />
      <NavLink name="Peserta" href="/students" last />
      {children}
    </Popover.Panel>
  );
}

export function AuthNav({ toggleOpen }) {
  const { width } = useWindowDimensions();

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
                <NavLink name="Profil" href="/profile" custom />
                <NavLink name="Profil Kelas" href="/profile-group" custom />
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
