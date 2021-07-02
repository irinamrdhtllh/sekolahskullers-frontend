import axios from 'axios';
import { useRouter } from 'next/router';

import { useAuth } from '../../hooks/useAuth';
import Header from '../../layout/Header';

export default function Login() {
  const { setStudent, setGroup, token, setToken } = useAuth();
  const router = useRouter();

  const onLogout = async () => {
    setStudent(null);
    setGroup(null);
    setToken(null);
    router.push('/');
  };

  return (
    <>
      <Header />
      {token ? (
        <button onClick={() => onLogout()}>Logout</button>
      ) : (
        <p>You have been logged out.</p>
      )}
    </>
  );
}
