import axios from "axios";

const BASE_URL = "http://localhost:5000/cards";

const api = axios.create({
  baseURL: BASE_URL,
});

export const fetchPosts = async () => {
  try {
    const response = await api.get("/get-blog-posts");
    return response.data.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

export const fetchPostById = async (postId) => {
  try {
    const response = await api.get(`/get-blog-posts/${postId}`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching post by ID:", error);
    throw error;
  }
};

export const updatePost = async (postId, updatedData) => {
  try {
    const response = await api.patch(`/update-blogById/${postId}`, updatedData);
    return response.data.data;
  } catch (error) {
    console.error("Error updating post:", error);
    throw error;
  }
};
