import { useEffect } from 'react';

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
  const { student, setStudent, token } = useAuth();

  useEffect(() => {
    const getStudent = async () => {
      const url = process.env.API_URL + 'api/auth/profile/';

      const [response, error] = await trycatch(
        axios.get(url, {
          headers: { Authorization: 'Bearer ' + token.access },
        })
      );
      
      if (error) {
        // TODO: implementasi refresh token baru
      } else {
        setStudent(response.data);
      }
    };

    getStudent();
  }, [setStudent, token]);

  return (
    <>
      <Header />
      <pre>{JSON.stringify(student, null, 2)}</pre>
    </>
  );
}
