import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://172.23.153.128:3333',
});
