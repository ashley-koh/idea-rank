const { makeExecutableSchemaFromModules } = require("../utils/modules");

const auth = require("./auth");
const books = require("./books");
const posts = require("./posts");
const comments = require("./comments");

module.exports = makeExecutableSchemaFromModules({
  modules: [auth, posts, comments],
});
