import axios from 'axios';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import { useAuth } from '../../hooks/useAuth';
import Header from '../../layout/Header';

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { setToken } = useAuth();
  const router = useRouter();

  const onLogin = async (data) => {
    const url = 'http://127.0.0.1:8000/api/login/';

    try {
      const response = await axios.post(url, data);
      setToken({ key: response.data.token });
      router.push('/');
    } catch (error) {
      console.error(error);
    }

  };
  // console.log(errors);

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit(onLogin)}>
        <p>
          <label htmlFor="username">NIM</label>
          <br />
          <input
            type="text"
            id="username"
            {...register('username', { required: true, maxLength: 8 })}
          />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            id="password"
            {...register('password', { required: true })}
          />
        </p>

        <button>Submit</button>
      </form>
    </>
  );
}
