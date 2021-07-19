import axios from 'axios';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_HOST;

export const fetchRegister = (values) => {
  return axios.post('auth/register/', values);
};

export const fetchLogin = (username, password) => {
  return axios.post('auth/login/', { username, password });
};

export const fetchRefresh = (refresh) => {
  return axios.post('auth/refresh/', { refresh });
};
