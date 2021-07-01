import { createContext, useContext, useEffect, useReducer } from 'react';

const reducer = (data, newData) => {
  // clear storage on logout
  if (newData === null) {
    localStorage.removeItem('student');
    localStorage.removeItem('group');
    localStorage.removeItem('token');
    return null;
  }

  return { ...data, ...newData };
};

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [student, setStudent] = useReducer(reducer, null);
  const [group, setGroup] = useReducer(reducer, null);
  const [token, setToken] = useReducer(reducer, null);

  // get data from local storage on every first load
  useEffect(() => {
    setStudent(JSON.parse(localStorage.getItem('student')));
    setGroup(JSON.parse(localStorage.getItem('group')));
    setToken(JSON.parse(localStorage.getItem('token')));
  }, []);

  useEffect(() => {
    // don't store data on local storage during logout
    if (!student && !group && !token) {
      return;
    }
    localStorage.setItem('student', JSON.stringify(student));
    localStorage.setItem('group', JSON.stringify(group));
    localStorage.setItem('token', JSON.stringify(token));
  }, [student, group, token]);

  const value = { student, setStudent, group, setGroup, token, setToken };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
