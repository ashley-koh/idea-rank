const Post = require("../../../models/post");

const createPost = async (_, { title, content }, { user }) => {
  const userId = user._id.toString();

  const newPost = new Post({
    title,
    content,
    createdBy: userId,
    comments: [],
  });

  await newPost.populate("createdBy").execPopulate().save();

  return newPost;
};

module.exports = createPost;
