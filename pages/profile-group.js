import { useEffect, useState } from 'react';

import useFetch from '../hooks/useFetch';
import Layout from '../layout/Layout';

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
  }, [loading]); // eslint-disable-line

  return (
    <>
      <Layout>
      {loading ? <p>Loading</p> : <pre>{JSON.stringify(group, null, 2)}</pre>}
      </Layout>
    </>
  );
}
