const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  content: {
    type: String,
    required: true,
  },

  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  created: {
    type: Date,
    default: Date.now,
  },

  changed: {
    type: Date,
    default: Date.now,
  },

  upvotes: {
    type: Number,
    default: 0,
  },

  downvotes: {
    type: Number,
    default: 0,
  },

  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});
const Post = mongoose.model("Post", postSchema);
module.exports = Post;
