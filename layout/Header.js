import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

import Button from '../components/Button';
import { useAuth } from '../hooks/useAuth';
import styles from '../styles/layout/Header.module.scss';

export default function Header() {
  const { isAuthenticated } = useAuth();

  const user = <FontAwesomeIcon className={styles.icons} icon="user" size="lg" />;

  return (
    <div className={styles.header}>
      <h1>Sekolah Skullers</h1>
      <div className={styles.menu}>
        <input type="checkbox" id="check" />
        <label className={styles.icon} htmlFor="check">
          <FontAwesomeIcon
            icon="bars"
            size="lg"
          />
        </label>
        <div className={styles.nav} id="nav">
          <Link href="/">Home</Link>
          <Link href="/students">Students</Link>
          <Link href="/groups">Groups</Link>
          <Link href="/class-year">Class Year</Link>
        </div>

        {!isAuthenticated ? (
          <div className={styles.button}>
            <Button href="/auth/login" name="Login" />
            <Button href="/auth/register" name="Register" />
          </div>
        ) : null}
        
        {isAuthenticated ? (
          <div className={styles.button}>
            <div className={styles.dropdown}>
              <Button href="/#" name={user} />
              <div className={styles.dropdown_content}>
                <Link href="/profile">Profile</Link>
                <Link href="/profile-group">Group Profile</Link>
              </div>
            </div>
            <Button href="/auth/logout" name="Logout" />
          </div>
        ) : null}
      </div>
    </div>
  );
}
