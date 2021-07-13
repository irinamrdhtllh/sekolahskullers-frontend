import axios from 'axios';

export const fetchRegister = (values) => {
  return axios.post('auth/register/', values);
};

export const fetchToken = (username, password) => {
  return axios.post('auth/token/', { username, password });
};

export const fetchNewToken = (refresh) => {
  return axios.post('auth/token/refresh/', { refresh });
};
