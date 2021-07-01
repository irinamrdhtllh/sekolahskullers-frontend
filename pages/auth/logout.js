import axios from 'axios';
import { useRouter } from 'next/router';

import { useAuth } from '../../hooks/useAuth';
import Header from '../../layout/Header';

export default function Login() {
  const { setStudent, setGroup, token, setToken } = useAuth();
  const router = useRouter();

  const onLogout = async () => {
    const url = 'http://127.0.0.1:8000/api/logout/';

    try {
      await axios.post(
        url,
        {},
        { headers: { Authorization: 'Token ' + token.key } }
      );
      setStudent(null);
      setGroup(null);
      setToken(null);
      router.push('/');
    } catch (error) {
      console.error(error);
    }
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
