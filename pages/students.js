import { useEffect, useState } from 'react';

import useFetch from '../hooks/useFetch';
import Footer from '../layout/Footer';
import Header from '../layout/Header';

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
  }, [loading]);

  return (
    <>
      <Header />
      {loading ? (
        <p>Loading</p>
      ) : (
        <pre>{JSON.stringify(students, null, 2)}</pre>
      )}
      <Footer />
    </>
  );
}
