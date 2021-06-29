import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';

export const AuthContext = createContext(null);

const reducer = (user, newUser) => {
  if (newUser === null) {
    localStorage.removeItem('user');
    return null;
  }
  return { ...user, ...newUser };
};

export function AuthProvider({ children }) {
  const [student, setStudent] = useReducer(reducer, null);
  const [token, setToken] = useState('');

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(student));
    localStorage.setItem('token', token);
  }, [student, token]);

  const value = { student, setStudent, token, setToken };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
