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
      return {
        ...state,
        token: action.payload.access,
        expiry: action.payload.access_expires * 1000,
        isAuthenticated: true,
        loading: false,
      };

    case 'logout':
      return {
        ...state,
        token: '',
        expiry: null,
        isAuthenticated: false,
        loading: false,
      };

    default:
      throw new Error();
  }
}
