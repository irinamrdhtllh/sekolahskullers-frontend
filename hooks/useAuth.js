import { createContext, useContext, useEffect, useReducer } from 'react';

import { fetchRegister, fetchLogin, fetchRefresh } from '../utils/fetch';
import authReducer from '../utils/reducer';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, {
    loading: true,
    isAuthenticated: false,
    user: {
      username: null,
      group: null,
    },
    token: '',
    expiry: null,
  });

  const tokenIsValid = () => {
    if (state.token === '') {
      return false;
    }

    const refresh_expires = localStorage.getItem('refresh_expires');
    const refresh_expiry = new Date(refresh_expires * 1000);
    if (refresh_expiry < Date.now()) {
      console.log('Refresh token expired:', refresh_expiry);
      return false;
    }

    const access_expiry = new Date(state.expiry);
    console.log('Checking token expiry:', access_expiry);
    return access_expiry.getTime() > Date.now();
  };

  useEffect(() => {
    const init = async () => {
      dispatch({ type: 'loading' });

      if (!tokenIsValid()) {
        if (localStorage.getItem('refresh')) {
          console.log('Invalid access token so refetching');
          await refreshToken();
          return;
        }

        console.log('Not logged in, unauthenticated');
        dispatch({ type: 'unauthenticated' });
      } else {
        console.log('Access token still valid');
        dispatch({ type: 'init' });
      }
    };

    init();
  }, []); // eslint-disable-line

  const refreshToken = async () => {
    dispatch({ type: 'loading' });

    try {
      const refresh = localStorage.getItem('refresh');

      if (!refresh) {
        throw new Error('Refresh token not available in storage');
      }

      const resp = await fetchRefresh(refresh);
      const tokenData = resp.data;

      console.log('Acquired new token');
      dispatch({ type: 'updateToken', payload: tokenData });

      return tokenData.access;
    } catch (error) {
      console.log('Not logged in, unauthenticated');
      logout();

      return;
    }
  };

  const login = async (username, password) => {
    try {
      const resp = await fetchLogin(username, password);
      const tokenData = resp.data;

      localStorage.setItem('refresh', tokenData.refresh);
      localStorage.setItem('refresh_expires', tokenData.refresh_expires);

      dispatch({ type: 'updateToken', payload: tokenData });

      return Promise.resolve(resp);
    } catch (error) {
      dispatch({ type: 'unauthenticated' });

      return Promise.reject(error);
    }
  };

  const registerUser = async (values) => {
    try {
      const resp = await fetchRegister(values);
      const tokenData = resp.data;

      dispatch({ type: 'updateToken', payload: tokenData });

      return Promise.resolve(resp);
    } catch (error) {
      dispatch({ type: 'unauthenticated' });

      return Promise.reject(error);
    }
  };

  const getToken = async () => {
    // Returns an access token if there's one or refetches a new one
    console.log('Getting access token..');
    if (tokenIsValid()) {
      console.log('Getting access token.. existing token still valid');

      return Promise.resolve(state.token);
    } else if (state.loading) {
      while (state.loading) {
        console.log('Getting access token.. waiting for token to be refreshed');
      }

      // Assume this means the token is in the middle of refreshing
      return Promise.resolve(state.token);
    } else {
      console.log('Getting access token.. getting a new token');
      const token = await refreshToken();

      return token;
    }
  };

  const logout = () => {
    dispatch({ type: 'logout' });

    localStorage.removeItem('refresh');
    localStorage.removeItem('refresh_expires');
  };

  const value = {
    user: state.user,
    isAuthenticated: state.isAuthenticated,
    loading: state.loading,
    registerUser,
    login,
    logout,
    getToken,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
