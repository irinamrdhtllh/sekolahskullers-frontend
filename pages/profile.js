import { useEffect, useState } from 'react';

import axios from 'axios';

import { useAuth } from '../hooks/useAuth';
import Header from '../layout/Header';

async function trycatch(api) {
  try {
    const response = await api;
    return [response, null];
  } catch (error) {
    console.error(error);
    return [null, error];
  }
}

export default function Profile() {
  const { state } = useAuth();
  const [student, setStudent] = useState({});

  useEffect(() => {
    const getStudent = async () => {
      const url = process.env.API_HOST + '/api/auth/profile/';

      const [response, error] = await trycatch(
        axios.get(url, {
          headers: { Authorization: 'Bearer ' + state.token.access },
        })
      );
      
      if (error) {
        // TODO: implementasi refresh token baru
      } else {
        setStudent(response.data);
      }
    };

    getStudent();
  }, [state.token.access]);

  return (
    <>
      <Header />
      <pre>{JSON.stringify(student, null, 2)}</pre>
    </>
  );
}
