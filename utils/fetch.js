import axios from 'axios';

export const fetchRegister = (values) => {
  return axios.post('register/', values);
};

export const fetchToken = (username, password) => {
  return axios.post('token/', { username, password });
};

export const fetchNewToken = () => {
  return axios.post('token/refresh/', {}, { withCredentials: true });
};
