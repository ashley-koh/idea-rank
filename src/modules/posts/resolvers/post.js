const { ApolloError } = require("apollo-server-express");
const Post = require("../../../models/post");

const recursivelyPopulate = require("./utils/populate-comments");

const post = async (_, args) => {
  const { id } = args;
  const post = await Post.findById(id)
    .populate("createdBy")
    .populate("comments")
    .then((doc) => recursivelyPopulate(doc.comments))
    .catch((err) => console.error(err));

  if (!post) {
    throw new ApolloError("Not found");
  }

  return post;
};

module.exports = post;
