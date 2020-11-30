const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  _id: { type: String, required: true, unique: true },
  title: { type: String },
  authors: { type: Array },
  description: { type: String },
  image: { type: String },
  link: { type: String } 
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
