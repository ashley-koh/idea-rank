const { gql } = require("apollo-server-express");

const typeDefs = gql`
  extend type Query {
    post(id: ID!): Post
    posts(userId: ID!): [Post]
  }

  extend type Mutation {
    createPost(title: String!, content: String!): Post @isAuthenticated

    deletePost(id: ID!): Post @isAuthenticated

    editPost(id: ID!, title: String!, content: String!): Post @isAuthenticated
  }

  type Post {
    id: ID!
    title: String!
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
