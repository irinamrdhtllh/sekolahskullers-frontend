import Link from 'next/link';

import { useAuth } from '../contexts/auth';

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
      <li>
        <Link href="/auth/register/">Register</Link>
      </li>
      <li>
        <Link href="/auth/login/">Login</Link>
      </li>
      <li>
        <Link href="/auth/logout/">Logout</Link>
      </li>
    </ul>
  );
}
