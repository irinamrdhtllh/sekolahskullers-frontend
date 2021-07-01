import { useEffect } from 'react';

import axios from 'axios';

import camelCase from '../helper/camelCase';
import { useAuth } from '../hooks/useAuth';
import Header from '../layout/Header';

export default function Profile() {
  const { student, setStudent, token } = useAuth();

  useEffect(() => {
    const getStudent = async () => {
      const url = 'http://127.0.0.1:8000/api/auth/profile/';

      try {
        const response = await axios.get(url, {
          headers: { Authorization: 'Token ' + token.key },
        });
        setStudent(camelCase(response.data));
      } catch (error) {
        console.error(error);
      }
    };

    if (student === null) {
      getStudent();
    }
  }, [student, setStudent, token]);

  return (
    <>
      <Header />
      <pre>{JSON.stringify(student, null, 2)}</pre>
    </>
  );
}
