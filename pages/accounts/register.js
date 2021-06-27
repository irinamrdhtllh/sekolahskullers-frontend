import { useState } from 'react';

import axios from 'axios';
import { useForm } from 'react-hook-form';

export default function Register() {
  const { register, handleSubmit } = useForm();
  const [token, setToken] = useState({ token: '', expiry: null });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/auth/register/',
        data
      );
      console.log(response);
      setToken({ ...response.data });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>
          <input
            type="text"
            placeholder="First name"
            {...register('first_name', { required: true, maxLength: 80 })}
          />
        </p>
        <p>
          <input
            type="text"
            placeholder="Last name"
            {...register('last_name', { required: true, maxLength: 100 })}
          />
        </p>
        <p>
          <input type="text" placeholder="NIM" {...register('username', {})} />
        </p>
        <p>
          <input
            type="email"
            placeholder="Email"
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          />
        </p>
        <p>
          <input
            type="password"
            placeholder="Password"
            {...register('password', {})}
          />
        </p>
        <p>
          <input
            type="password"
            placeholder="Confirm password"
            {...register('password2', {})}
          />
        </p>
        <button>Submit</button>
      </form>
      <h2>Token</h2>
      <p>Key: {token.key}</p>
      <p>
        Expiry: {token.expiry === null ? '' : new Date(token.expiry).toString()}
      </p>
    </>
  );
}
