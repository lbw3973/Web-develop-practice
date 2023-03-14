import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  headers: { // 필요한 경우 header 도 명시
    'Content-type': 'application/json',
  },
});
