import { instance } from "./axios";

export const getPosts = async () => {
  try {
    const response = await instance.get("/posts");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getPost = async (id) => {
  try {
    const response = await instance.get(`/posts/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
