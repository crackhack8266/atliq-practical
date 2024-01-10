// INFO: The below given code is the example for axios client for react query

import axios from 'axios';

const encryptedLockerAxiosClient = axios.create({
  baseURL: 'https://randomuser.me/',
  headers: {
    'Content-Type': 'application/json',
  },
});

const requestInterceptor = (config) =>
  // if (userToken && userToken !== 'undefined') {
  //   config.headers.Authorization = userToken;
  // }

  config;
encryptedLockerAxiosClient.interceptors.request.use(requestInterceptor);

export default encryptedLockerAxiosClient;
