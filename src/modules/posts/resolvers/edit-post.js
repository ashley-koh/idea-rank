const Post = require("../../../models/post");
const { ApolloError } = require("apollo-server-express");

const recursivelyPopulate = require("./utils/populate-comments");

const editPost = async (_, { id, title, content }, { user }) => {
  const userId = user._id.toString();
  const post = await Post.find({ _id: id, createdBy: userId }).populate(
    "createdBy"
  );

  if (!post) {
    throw new ApolloError("Post does not exist");
  }

  post.title = title;
  post.content = content;

  await post.save();

  return post
    .populate("comments")
    .then((doc) => recursivelyPopulate(doc.comments))
    .catch((err) => console.error(err));
};

module.exports = editPost;
