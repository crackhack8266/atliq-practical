// INFO: The below given code is the example for axios client for react query

import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://randomuser.me/',
  headers: {
    'Content-Type': 'application/json',
  },
});

const requestInterceptor = (config) => config;
axiosClient.interceptors.request.use(requestInterceptor);

export default axiosClient;
