import axios from 'axios';

export const fetchToken = (username, password) => {
  return axios.post(
    'token/',
    { username, password },
    { withCredentials: true }
  );
};

export const fetchNewToken = () => {
  return axios.post('token/refresh/', {}, { withCredentials: true });
};
