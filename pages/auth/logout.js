import { useEffect } from 'react';

import { useRouter } from 'next/router';

import { useAuth } from '../../hooks/useAuth';

export default function Login() {
  const { logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    logout();
    router.push('/');
  }, []); // eslint-disable-line

  return <></>;
}
