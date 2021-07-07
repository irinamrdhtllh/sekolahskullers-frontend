import { useRouter } from 'next/router';

import { useAuth } from '../../hooks/useAuth';
import Layout from '../../layout/Layout';

export default function Login() {
  const { isAuthenticated, logout } = useAuth();
  const router = useRouter();

  const onLogout = async () => {
    logout();
    router.push('/');
  };

  return (
    <>
      <Layout>
      {isAuthenticated ? (
        <button onClick={() => onLogout()}>Logout</button>
      ) : (
        <p>You have been logged out.</p>
      )}
      </Layout>
    </>
  );
}
