import axios from "axios";

export default {
  // Deletes the post with the given id
  deletePost: function (id) {
    return axios.delete("/api/posts/" + id).then(result => result.data);
  },
  // Saves a post to the database
  savePost: function (bookData) {
    return axios.post("/api/posts", bookData).then(result => result.data);
  },
  // Get the saved posts from the database
  savedPosts: function () {
    return axios.get("/api/posts").then(result => result.data);
  }
};