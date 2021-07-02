import { useEffect } from 'react';

import axios from 'axios';

import { useAuth } from '../hooks/useAuth';
import Header from '../layout/Header';

export default function ProfileGroup() {
  const { group, setGroup, token } = useAuth();

  useEffect(() => {
    const getGroup = async () => {
      const url = process.env.API_URL + 'api/auth/profile/group/';

      try {
        const response = await axios.get(url, {
          headers: { Authorization: 'Bearer ' + token.access },
        });
        setGroup(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getGroup();
  }, [setGroup, token]);

  return (
    <>
      <Header />
      <pre>{JSON.stringify(group, null, 2)}</pre>
    </>
  );
}
