const isAuthenticated = require("./is-authenticated");

module.exports = {
  typeDefs: [isAuthenticated.typeDefs],
  schemaDirectives: {
    isAuthenticated: isAuthenticated.directive,
  },
};
