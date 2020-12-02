import axios from "axios";

export default {
  // Deletes the post with the given id
  deletePost: function (id) {
    return axios.delete("/api/posts/" + id).then(result => result.data);
  },
  // Saves a post to the database
  createPost: function (postData) {
    return axios.post("/api/addpost", postData).then(result => result.data);
  },
  // Get the saved posts from the database
  getPosts: function () {
    return axios.get("/api/posts").then(result => result.data);
  }
};