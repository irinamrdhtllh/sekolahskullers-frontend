import Link from 'next/link';

import { useAuth } from '../hooks/useAuth';

export default function Header() {
  const { student } = useAuth();

  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      {student ? (
        <li>
          <Link href="/profile">Profile</Link>
        </li>
      ) : null}
      {student === null ? (
        <li>
          <Link href="/auth/register">Register</Link>
        </li>
      ) : null}
      <li>
        <Link href="/auth/login">Login</Link>
      </li>
      {student ? (
        <li>
          <Link href="/auth/logout">Logout</Link>
        </li>
      ) : null}
    </ul>
  );
}
