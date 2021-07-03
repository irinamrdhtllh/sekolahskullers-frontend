import { createContext, useContext, useEffect, useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'login':
      const newState = { isAuthenticated: true, token: action.payload };
      localStorage.setItem('state', JSON.stringify(newState));
      return newState;

    case 'retrieve':
      const storage = JSON.parse(localStorage.getItem('state'));
      if (storage) {
        return storage;
      }

    case 'logout':
      localStorage.removeItem('state');
      return initialState;
  }
};

const AuthContext = createContext({});

const initialState = {
  isAuthenticated: false,
  token: { access: '', refresh: '' },
};

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // get state from local storage on every first load
  useEffect(() => {
    dispatch({ type: 'retrieve' });
  }, []);

  const value = { state, dispatch };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
