import { useState } from 'react';

import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import { useAuth } from '../../hooks/useAuth';
import Footer from '../../layout/Footer';
import Header from '../../layout/Header';

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { loading, isAuthenticated, login } = useAuth();
  const [error, setError] = useState(false);
  const router = useRouter();

  const onLogin = async ({ username, password }) => {
    setError(false);
    try {
      await login(username, password);
    } catch (error) {
      console.error(error);
      // TODO: handle 401 error
      setError(true);
    }
  };
  // console.log(errors);

  if (!loading && isAuthenticated) {
    router.push('/');
  }

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
      {error && <p>NIM or password incorrect</p>}
      <Footer />
    </>
  );
}
