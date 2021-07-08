import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu, Popover } from '@headlessui/react';
import Link from 'next/link';

import { useAuth } from '../hooks/useAuth';
import useWindowDimensions from '../hooks/useWindowDimensions';
import styles from '../styles/layout/Header.module.scss';
import Nav, { AuthNav, AnonymousNav } from './Nav';

export default function Header() {
  const { isAuthenticated } = useAuth();
  const { width } = useWindowDimensions();

  return (
    <header className={styles.container}>
      <h1>Sekolah Skullers</h1>
      <Popover>
        {({ open }) => (
          <>
            <Popover.Button as="div" className={styles.toggle}>
              <FontAwesomeIcon icon="bars" size="lg" />
            </Popover.Button>
            {(open || width >= 768) && (
              <Nav>
                {isAuthenticated ? (
                  <AuthNav toggleOpen={open} />
                ) : (
                  <AnonymousNav />
                )}
              </Nav>
            )}
          </>
        )}
      </Popover>
    </header>
  );
}
