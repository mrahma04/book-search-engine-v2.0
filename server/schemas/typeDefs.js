// import gql
const {gql} = require('apollo-server-express')

// create typeDefs
// create Query to get all users
// create Query to get a single user
// create User
const typeDefs = gql`

    type User {
        _id: ID
        username: String
        email: String
        password: String
    }

    type Query {
        helloWorld: String
        users: [User]
        user(username: String!): User
    }

    type Mutation {
        login(email: String!, password: String!): User
        addUser(username: String!, email: String!, password: String!): User
    }
`

module.exports = typeDefs