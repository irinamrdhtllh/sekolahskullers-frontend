import { useEffect, useState } from 'react';

import useFetch from '../hooks/useFetch';
import Header from '../layout/Header';

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
  }, [loading]);

  return (
    <>
      <Header />
      {loading ? (
        <p>Loading</p>
      ) : (
        <pre>{JSON.stringify(groups, null, 2)}</pre>
      )}
    </>
  );
}
