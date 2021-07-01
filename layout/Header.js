import Link from 'next/link';

import { useAuth } from '../hooks/useAuth';

export default function Header() {
  const { token } = useAuth();

  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      {token ? (
        <>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Link href="/profile_group">Group Profile</Link>
          </li>
        </>
      ) : null}
      {token === null ? (
        <>
          <li>
            <Link href="/auth/register">Register</Link>
          </li>
          <li>
            <Link href="/auth/login">Login</Link>
          </li>
        </>
      ) : null}

      {token ? (
        <li>
          <Link href="/auth/logout">Logout</Link>
        </li>
      ) : null}
    </ul>
  );
}
