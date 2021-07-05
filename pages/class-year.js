import { useEffect, useState } from 'react';

import useFetch from '../hooks/useFetch';
import Footer from '../layout/Footer';
import Header from '../layout/Header';

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
      <Header />
      {loading ? (
        <p>Loading</p>
      ) : (
        <pre>{JSON.stringify(classYear, null, 2)}</pre>
      )}
      <Footer />
    </>
  );
}
