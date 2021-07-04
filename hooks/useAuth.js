import { createContext, useContext, useEffect, useReducer } from 'react';

import axios from 'axios';
import { useRouter } from 'next/router';

axios.defaults.baseURL = process.env.API_HOST + '/api/';

const fetchToken = (username, password) => {
  return axios.post(
    'token/',
    { username, password },
    { withCredentials: true }
  );
};

const fetchNewToken = () => {
  return axios.post('token/refresh/', {}, { withCredentials: true });
};

const AuthContext = createContext({});

const reducer = (state, action) => {
  switch (action.type) {
    case 'init':
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
      };

    case 'loading':
      return {
        ...state,
        loading: true,
      };

    case 'unauthenticated':
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
      };

    case 'fetch':
      return {
        ...state,
        token: action.payload.access,
        expiry: action.payload.access_expires * 1000,
        isAuthenticated: true,
        loading: false,
      };

    case 'login':
      if (action.status === 'failed') {
        return {
          ...state,
          isAuthenticated: false,
          loading: true,
        };
      } else {
        return state;
      }

    case 'logout':
      return {
        ...state,
        token: '',
        expiry: null,
        isAuthenticated: false,
        loading: false,
      };
  }
};

const initialState = {
  loading: true,
  isAuthenticated: false,
  token: '',
  expiry: null,
};

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const router = useRouter();

  const tokenIsValid = () => {
    if (state.token === '') {
      return false;
    }
    const expiry = new Date(state.expiry);
    console.log('Checking token expiry:', expiry);
    return expiry.getTime() > Date.now();
  };

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

  useEffect(() => {
    init();
  }, []);

  const refreshToken = async () => {
    dispatch({ type: 'loading' });
    try {
      const resp = await fetchNewToken();
      const tokenData = resp.data;
      console.log('Acquired new token');
      // REVIEW: use await in receiving data
      dispatch({ type: 'fetch', payload: tokenData });
      return tokenData.access;
    } catch (error) {
      console.log('Not logged in, unauthenticated');
      logout();
      router.push('/');
      return;
    }
  };

  const login = async (username, password) => {
    const resp = await fetchToken(username, password);
    if (resp.status === 200) {
      // REVIEW: use await in receiving data
      const tokenData = resp.data;
      dispatch({ type: 'fetch', payload: tokenData });
    } else {
      dispatch({ type: 'login', status: 'failed' });
    }
    return resp;
  };

  const getToken = async () => {
    // Returns an access token if there's one or refetches a new one
    console.log('Getting access token..');
    if (tokenIsValid()) {
      console.log('Getting access token.. existing token still valid');
      return Promise.resolve(state.token);

      // else if (state.loading) {
      //   while (state.loading) {
      //     console.log('Getting access token.. waiting for token to be refreshed');
      //   }
      //   // Assume this means the token is in the middle of refreshing
      //   return Promise.resolve(state.token);
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
    login,
    logout,
    getToken,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
