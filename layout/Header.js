import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Popover } from '@headlessui/react';

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
      <Popover as="div" className={styles.navbar}>
        {({ open }) => (
          <>
            <Popover.Button as="div" className={styles.toggle}>
              <FontAwesomeIcon icon="bars" size="lg" />
            </Popover.Button>
            {(open || width >= 640) && (
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
