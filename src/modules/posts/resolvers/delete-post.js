const Post = require("../../../models/post");
const { ApolloError } = require("apollo-server-express");

const deletePost = async (_, { id }, { user }) => {
  const userId = user._id.toString();

  const post = await Post.findOneAndDelete({
    _id: id,
    createdBy: userId,
  }).populate("createdBy");

  if (!post) {
    throw new ApolloError("Post does not exist");
  }

  return post;
};

module.exports = deletePost;
