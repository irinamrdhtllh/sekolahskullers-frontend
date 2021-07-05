import { useRouter } from 'next/router';

import { useAuth } from '../../hooks/useAuth';
import Footer from '../../layout/Footer';
import Header from '../../layout/Header';

export default function Login() {
  const { isAuthenticated, logout } = useAuth();
  const router = useRouter();

  const onLogout = async () => {
    logout();
    router.push('/');
  };

  return (
    <>
      <Header />
      {isAuthenticated ? (
        <button onClick={() => onLogout()}>Logout</button>
      ) : (
        <p>You have been logged out.</p>
      )}
      <Footer />
    </>
  );
}
