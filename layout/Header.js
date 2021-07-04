import Link from 'next/link';

import { useAuth } from '../hooks/useAuth';

export default function Header() {
  const { isAuthenticated } = useAuth();

  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/students">Students</Link>
      </li>
      <li>
        <Link href="/groups">Groups</Link>
      </li>
      <li>
        <Link href="/class-year">Class Year</Link>
      </li>
      {isAuthenticated ? (
        <>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Link href="/profile-group">Group Profile</Link>
          </li>
          <li>
            <Link href="/auth/logout">Logout</Link>
          </li>
        </>
      ) : null}
      {!isAuthenticated ? (
        <>
          <li>
            <Link href="/auth/register">Register</Link>
          </li>
          <li>
            <Link href="/auth/login">Login</Link>
          </li>
        </>
      ) : null}
    </ul>
  );
}
