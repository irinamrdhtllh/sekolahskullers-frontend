import { useAuth } from '../contexts/auth';
import Header from '../layout/Header';

export default function Profile() {
  const { student } = useAuth();

  return (
    <>
      <Header />
      <pre>{JSON.stringify(student, null, 2)}</pre>
    </>
  );
}
