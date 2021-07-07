import axios from 'axios';

export const fetchRegister = (data) => {
  return axios.post('register/', data);
};

export const fetchToken = (username, password) => {
  return axios.post('token/', { username, password });
};

export const fetchNewToken = () => {
  return axios.post('token/refresh/', {}, { withCredentials: true });
};
