import { useEffect } from 'react';

import axios from 'axios';

import camelCase from '../helper/camelCase';
import { useAuth } from '../hooks/useAuth';
import Header from '../layout/Header';

export default function ProfileGroup() {
  const { group, setGroup, token } = useAuth();

  useEffect(() => {
    const getGroup = async () => {
      const url = 'http://127.0.0.1:8000/api/auth/profile/group/';

      try {
        const response = await axios.get(url, {
          headers: { Authorization: 'Token ' + token.key },
        });
        setGroup(camelCase(response.data));
      } catch (error) {
        console.error(error);
      }
    };

    if (group === null) {
      getGroup();
    }
  }, [group, setGroup, token]);

  return (
    <>
      <Header />
      <pre>{JSON.stringify(group, null, 2)}</pre>
    </>
  );
}
