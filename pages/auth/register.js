import { useState } from 'react';

import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import { useAuth } from '../../hooks/useAuth';
import Footer from '../../layout/Footer';
import Header from '../../layout/Header';

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { loading, isAuthenticated, registerUser } = useAuth();
  const [error, setError] = useState(false);
  const router = useRouter();

  const onRegister = async (data) => {
    setError(false);
    try {
      await registerUser(data);
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
      <form onSubmit={handleSubmit(onRegister)}>
        <p>
          <label htmlFor="firstName">First name</label>
          <br />
          <input
            type="text"
            id="firstName"
            {...register('first_name', { required: true, maxLength: 80 })}
          />
        </p>
        <p>
          <label htmlFor="lastName">Last name</label>
          <br />
          <input
            type="text"
            id="lastName"
            {...register('last_name', { required: true, maxLength: 100 })}
          />
        </p>
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
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            id="Email"
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
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
        <p>
          <label htmlFor="password2">Confirm password</label>
          <br />
          <input
            type="password"
            id="password2"
            {...register('password2', { required: true })}
          />
        </p>

        <button>Submit</button>
      </form>
      <Footer />
    </>
  );
}
