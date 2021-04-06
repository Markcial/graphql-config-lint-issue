const { gql } = require('graphql-tag');

const getUser = gql`
  query getUser($id: ID!) {
    getUser(id: $id) {
      id
      nam
    }
  }
`

module.exports = { getUser };
