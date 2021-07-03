import Link from 'next/link';

import { useAuth } from '../hooks/useAuth';

export default function Header() {
  const { state } = useAuth();

  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      {state.isAuthenticated ? (
        <>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Link href="/profile_group">Group Profile</Link>
          </li>
        </>
      ) : null}
      {!state.isAuthenticated ? (
        <>
          <li>
            <Link href="/auth/register">Register</Link>
          </li>
          <li>
            <Link href="/auth/login">Login</Link>
          </li>
        </>
      ) : null}

      {state.isAuthenticated ? (
        <li>
          <Link href="/auth/logout">Logout</Link>
        </li>
      ) : null}
    </ul>
  );
}
