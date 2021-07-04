import { useEffect, useState } from 'react';

import useFetch from '../hooks/useFetch';
import Header from '../layout/Header';

export default function Profile() {
  const { response, loading } = useFetch(
    {
      method: 'GET',
      url: 'profile/group/',
    },
    true
  );
  const [group, setGroup] = useState({});

  useEffect(() => {
    if (!loading) {
      setGroup(response.data);
    }
  }, [loading]);

  return (
    <>
      <Header />
      {loading ? <p>Loading</p> : <pre>{JSON.stringify(group, null, 2)}</pre>}
    </>
  );
}
