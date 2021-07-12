import { useEffect, useState } from 'react';

export default function Alert({ msg }) {
  const [message, setMessage] = useState('');

  useEffect(() => {
    for (const key of Object.keys(msg)) {
      if (key === 'detail') {
        setMessage('NIM atau password salah');
      } else if (key === 'email') {
        setMessage('Email telah digunakan');
      }
    }
  }, []); // eslint-disable-line

  return <div>{message}</div>;
}
