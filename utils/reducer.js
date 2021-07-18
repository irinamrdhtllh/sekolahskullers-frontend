import jwt from 'jsonwebtoken';

export default function authReducer(state, action) {
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

    case 'updateToken':
      const newToken = action.payload.access;
      return {
        ...state,
        token: newToken,
        expiry: action.payload.access_expires * 1000,
        user: {
          username: jwt.decode(newToken).username,
          group: () => {
            try {
              return jwt.decode(newToken).group;
            } catch (err) {
              return null;
            }
          },
        },
        isAuthenticated: true,
        loading: false,
      };

    case 'logout':
      return {
        ...state,
        token: '',
        expiry: null,
        user: {
          username: null,
          group: null,
        },
        isAuthenticated: false,
        loading: false,
      };

    default:
      throw new Error();
  }
}
