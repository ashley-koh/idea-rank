const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },

  upvotes: {
    type: Number,
    default: 0,
  },

  downvotes: {
    type: Number,
    default: 0,
  },

  level: {
    type: Number,
    required: true,
  },

  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],

  created: {
    type: Date,
    default: Date.now,
  },

  changed: {
    type: Date,
    default: Date.now,
  },
});

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
