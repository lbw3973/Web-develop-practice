import { instance } from './axios';

export const getUsers = async () => {
  try {
    const response = await instance.get('/users')
    return response.data;
  } catch (error) {
    console.log(error);
  }
};