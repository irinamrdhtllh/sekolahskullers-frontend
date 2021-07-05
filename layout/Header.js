import Link from 'next/link';

import Button from '../components/Button';
import { useAuth } from '../hooks/useAuth';

export default function Header() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="header">
      <h1>Sekolah Skullers</h1>
      <div className="menu">
        <div className="nav">
          <Link href="/">Home</Link>
          <Link href="/students">Students</Link>
          <Link href="/groups">Groups</Link>
          <Link href="/class-year">Class Year</Link>
          {isAuthenticated ? (
            <>
              <Link href="/profile">Profile</Link>
              <Link href="/profile-group">Group Profile</Link>
            </>
          ) : null}
        </div>
        {!isAuthenticated ? (
          <div className="Button">
            <Button href="/auth/login" name="Login" />
            <Button href="/auth/register" name="Register" />
          </div>
        ) : null}
        {isAuthenticated ? (
          <div className="Button">
            <Button href="/auth/logout" name="Logout"/>
          </div>
        ) : null}
      </div>
    </div>
  );
}
