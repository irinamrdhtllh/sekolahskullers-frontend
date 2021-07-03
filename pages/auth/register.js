import axios from 'axios';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import { useAuth } from '../../hooks/useAuth';
import Header from '../../layout/Header';

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { dispatch } = useAuth();
  const router = useRouter();

  const onRegister = async (data) => {
    const url = process.env.API_HOST + '/api/register/';

    try {
      const response = await axios.post(url, data);
      dispatch({ type: 'login', payload: response.data });
      router.push('/');
    } catch (error) {
      console.error(error.response);
    }
  };
  // console.log(errors);

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
    </>
  );
}
