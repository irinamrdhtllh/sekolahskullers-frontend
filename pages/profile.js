import { useEffect, useState } from 'react';

import useFetch from '../hooks/useFetch';
import Layout from '../layout/Layout';

export default function Profile() {
  const { response, loading } = useFetch(
    {
      method: 'GET',
      url: 'profile/',
    },
    true
  );
  const [student, setStudent] = useState({});

  useEffect(() => {
    if (!loading) {
      setStudent(response.data);
    }
  }, [loading]); // eslint-disable-line

  return (
    <>
      <Layout>
      {loading ? <p>Loading</p> : <pre>{JSON.stringify(student, null, 2)}</pre>}
      </Layout>
    </>
  );
}
