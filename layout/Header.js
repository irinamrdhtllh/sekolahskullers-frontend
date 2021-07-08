import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu } from '@headlessui/react';
import Link from 'next/link';

import Button from '../components/Button';
import { useAuth } from '../hooks/useAuth';
import styles from '../styles/layout/Header.module.scss';

export default function Header() {
  const { isAuthenticated } = useAuth();

  // const user = (
  //   <FontAwesomeIcon className={styles.icons} icon="user" size="lg" />
  // );

  return (
    <div className={styles.container}>
      <h1>Sekolah Skullers</h1>
      <Menu>
        <Menu.Button as="div" className={styles.toggle}>
          <FontAwesomeIcon icon="bars" size="lg" />
        </Menu.Button>
        <Menu.Items as="div" className={styles.menu}>
          <Menu.Item>
            {({ active }) => (
              <Link href="#" passHref className={active && styles.active}>
                Home
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link href="#" className={active && styles.active}>
                Angkatan
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link href="#" className={active && styles.active}>
                Kelas
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link href="#" className={active && styles.active}>
                Peserta
              </Link>
            )}
          </Menu.Item>
          {!isAuthenticated ? (
            <>
              <Menu.Item as="span">
                <Button href="#" name="Login" width={'50%'} />
              </Menu.Item>
              <Menu.Item as="span">
                <Button href="#" name="Register" width={'50%'} />
              </Menu.Item>
            </>
          ) : null}
        </Menu.Items>
      </Menu>
    </div>
  );
}
