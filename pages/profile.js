import { useEffect, useState } from 'react';

import useFetch from '../hooks/useFetch';
import Footer from '../layout/Footer';
import Header from '../layout/Header';

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
  }, [loading]);

  return (
    <>
      <Header />
      {loading ? <p>Loading</p> : <pre>{JSON.stringify(student, null, 2)}</pre>}
      <Footer />
    </>
  );
}
