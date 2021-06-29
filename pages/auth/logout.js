import axios from 'axios';
import { useForm } from 'react-hook-form';

import { useAuth } from '../../contexts/auth';
import camelCase from '../../helper/camelCase';
import Header from '../../layout/Header';

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { student, setStudent, token, setToken } = useAuth();

  const onLogout = async (data) => {
    const url = 'http://127.0.0.1:8000/api/logout/';
    const response = await axios.post(
      url,
      {},
      { headers: { Authorization: 'Token ' + token } }
    );
    // console.log(response);

    setStudent(null);
    setToken('');
  };
  // console.log(errors);

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
