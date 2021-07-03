import { useRouter } from 'next/router';

import { useAuth } from '../../hooks/useAuth';
import Header from '../../layout/Header';

export default function Login() {
  const { state, dispatch } = useAuth();
  const router = useRouter();

  const onLogout = async () => {
    dispatch({type: 'logout'})
    router.push('/');
  };

  return (
    <>
      <Header />
      {state.isAuthenticated ? (
        <button onClick={() => onLogout()}>Logout</button>
      ) : (
        <p>You have been logged out.</p>
      )}
    </>
  );
}
