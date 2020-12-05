import axios from 'axios';

export default {
    // This function is to check if the user is logged in, and to return their info if they are not
    checkUserInfo: () => {
        return axios.get("/api/user_data");
    },
    signup: (signupData) => {
        return axios.post("/api/signup", signupData)
    },
    login: (loginData) => {
        return axios.post("/api/login", loginData)
    },
    logout: () => {
        return axios.get("/api/logout");
    },
    getPosts: () => {
        return axios.get("/api/posts");
    },
    savePost: (postData) => {
        return axios.post("/api/posts", postData);
    },
    getUserPosts: (userId) => {
        return  axios.get("/api/posts/:user_id", userId);
    },
    deleteUserPost: (postId) => {
        return axios.delete("/api/posts/" + postId);
    },
    updatePost: () => {
        return axios.update("/api/posts");
    }
}