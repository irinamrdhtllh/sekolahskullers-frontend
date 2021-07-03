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
  const [group, setGroup] = useState({});

  useEffect(() => {
    const getGroup = async () => {
      const url = process.env.API_HOST + '/api/auth/profile/group/';

      const [response, error] = await trycatch(
        axios.get(url, {
          headers: { Authorization: 'Bearer ' + state.token.access },
        })
      );
      
      if (error) {
        // TODO: implementasi refresh token baru
      } else {
        setGroup(response.data);
      }
    };

    getGroup();
  }, [state.token.access]);

  return (
    <>
      <Header />
      <pre>{JSON.stringify(group, null, 2)}</pre>
    </>
  );
}
