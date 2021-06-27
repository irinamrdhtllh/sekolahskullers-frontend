import { useState } from 'react';

import axios from 'axios';
import { useForm } from 'react-hook-form';

export default function Login() {
  const { register, handleSubmit } = useForm();
  const [token, setToken] = useState({ key: '', expiry: null });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/auth/login/',
        data
      );
      console.log(response);
      setToken({ key: response.data.token, expiry: response.data.expiry });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>
          <input type="text" placeholder="NIM" {...register('username', {})} />
        </p>
        <p>
          <input
            type="password"
            placeholder="Password"
            {...register('password', {})}
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
