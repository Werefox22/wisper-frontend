import axios from "axios";

export const url = 'http://wisperapi-env.eba-cp34fknb.us-east-1.elasticbeanstalk.com';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
export const sharePost = (id) => axios.patch(`${url}/${id}/sharePost`);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);