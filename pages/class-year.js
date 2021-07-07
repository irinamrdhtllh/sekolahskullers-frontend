import { useEffect, useState } from 'react';

import useFetch from '../hooks/useFetch';
import Layout from '../layout/Layout';

export default function ClassYear() {
  const { response, loading } = useFetch({
    method: 'GET',
    url: 'class-year/',
  });
  const [classYear, setClassYear] = useState([]);

  useEffect(() => {
    if (!loading) {
      setClassYear(response.data);
    }
  }, [loading]);

  return (
    <>
      <Layout>
      {loading ? (
        <p>Loading</p>
      ) : (
        <pre>{JSON.stringify(classYear, null, 2)}</pre>
      )}
      </Layout>
    </>
  );
}
