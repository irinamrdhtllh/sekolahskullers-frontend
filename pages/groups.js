import { useEffect, useState } from 'react';

import useFetch from '../hooks/useFetch';
import Layout from '../layout/Layout';

export default function Groups() {
  const { response, loading } = useFetch({
    method: 'GET',
    url: 'groups/',
  });
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    if (!loading) {
      setGroups(response.data.results);
    }
  }, [loading]); // eslint-disable-line

  return (
    <>
      <Layout>
      {loading ? (
        <p>Loading</p>
      ) : (
        <pre>{JSON.stringify(groups, null, 2)}</pre>
      )}
      </Layout>
    </>
  );
}
