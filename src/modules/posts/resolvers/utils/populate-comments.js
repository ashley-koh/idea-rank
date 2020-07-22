const recursivelyPopulate = async (comments) => {
  if (comments.length > 0) {
    return comments.map((comment) => {
      if (comment.level < 5) {
        return comment
          .populate("comments")
          .then((doc) => recursivelyPopulate(doc.comments))
          .catch((err) => console.error(err));
      }
      return comment;
    });
  }

  return;
};

module.exports = recursivelyPopulate;
