const { gql } = require("apollo-server-express");

const typeDefs = gql`
  extend type Query {
    comment(id: ID!): Comment
  }

  extend type Mutation {
    createComment(content: String!): Comment
  }

  type Comment {
    id: ID!
    content: String!
    createdBy: User!
    created: DateTime!
    changed: DateTime!
    upvotes: Int!
    downvotes: Int!
    comments: [Comment]!
  }
`;

const resolvers = require("./resolvers");

module.exports = {
  // typeDefs is an array, because it should be possible to split your schema
  // if the schema grows too big, you can just export multiple here
  typeDefs: [typeDefs],
  resolvers,
};
