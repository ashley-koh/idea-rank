const post = require("./post");
const posts = require("./posts");
const createPost = require("./create-post");
const deletePost = require("./delete-post");
const editPost = require("./edit-post");

const resolvers = {
  Query: {
    post,
    posts,
  },
  Mutation: {
    createPost,
    deletePost,
    editPost,
  },
};

module.exports = resolvers;
