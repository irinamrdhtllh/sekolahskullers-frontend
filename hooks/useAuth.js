import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';

const reducer = (user, newUser) => {
  if (newUser === null) {
    localStorage.removeItem('student');
    localStorage.removeItem('token');
    return null;
  }
  return { ...user, ...newUser };
};

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [student, setStudent] = useReducer(reducer, null);
  const [token, setToken] = useState('');

  useEffect(() => {
    if (student !== null && token !== '') {
      localStorage.setItem('student', JSON.stringify(student));
      localStorage.setItem('token', token);
    }
  }, [student, token]);

  useEffect(() => {
    setStudent(JSON.parse(localStorage.getItem('student')));
    setToken(localStorage.getItem('token'));
  }, []);

  const value = { student, setStudent, token, setToken };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
