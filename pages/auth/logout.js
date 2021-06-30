import axios from 'axios';

import { useAuth } from '../../hooks/useAuth';
import Header from '../../layout/Header';

export default function Login() {
  const { student, setStudent, token, setToken } = useAuth();

  const onLogout = async () => {
    const url = 'http://127.0.0.1:8000/api/logout/';

    try {
      await axios.post(
        url,
        {},
        { headers: { Authorization: 'Token ' + token } }
      );
      setStudent(null);
      setToken('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header />
      {student ? (
        <button onClick={() => onLogout()}>Logout</button>
      ) : (
        <p>You have been logged out.</p>
      )}
    </>
  );
}
