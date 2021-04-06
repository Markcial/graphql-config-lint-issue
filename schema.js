module.exports = `
  type User {
    id: ID!
    name: String!
  }

  type Query {
    getUser(id: ID!): User!
  }
`;