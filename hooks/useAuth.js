import { createContext, useContext, useEffect, useReducer } from 'react';

import axios from 'axios';

import { fetchRegister, fetchToken, fetchNewToken } from '../utils/fetch';
import authReducer from '../utils/reducer';

axios.defaults.baseURL = process.env.API_HOST + '/api/';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, {
    loading: true,
    isAuthenticated: false,
    token: '',
    expiry: null,
  });

  const tokenIsValid = () => {
    if (state.token === '') {
      return false;
    }
    const expiry = new Date(state.expiry);
    console.log('Checking token expiry:', expiry);
    return expiry.getTime() > Date.now();
  };

  useEffect(() => {
    const init = async () => {
      dispatch({ type: 'loading' });

      if (!tokenIsValid()) {
        console.log('Invalid access token so refetching');
        await refreshToken();

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
      const resp = await fetchNewToken();
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
      const resp = await fetchToken(username, password);
      const tokenData = resp.data;

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
    axios.post('token/logout/', {});
  };

  const value = {
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
