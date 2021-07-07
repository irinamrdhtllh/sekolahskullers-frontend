import { useEffect, useState } from 'react';

import useFetch from '../hooks/useFetch';
import Layout from '../layout/Layout';

export default function Students() {
  const { response, loading } = useFetch({
    method: 'GET',
    url: 'students/',
  });
  const [students, setStudents] = useState([]);

  useEffect(() => {
    if (!loading) {
      setStudents(response.data.results);
    }
  }, [loading]); // eslint-disable-line

  return (
    <>
      <Layout>
      {loading ? (
        <p>Loading</p>
      ) : (
        <pre>{JSON.stringify(students, null, 2)}</pre>
      )}
      </Layout>
    </>
  );
}
