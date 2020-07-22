const Post = require("../../../models/post");
const { ApolloError } = require("apollo-server-express");

const posts = async (_, { userId }) => {
  const posts = await Post.find({ createdBy: userId })
    .populate("createdBy")
    .populate("comments");

  if (!posts) {
    throw new ApolloError("Server Error");
  }

  return posts;
};

module.exports = posts;
