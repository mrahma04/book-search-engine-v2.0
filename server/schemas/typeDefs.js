// import gql
const {gql} = require('apollo-server-express')

// create typeDefs
// create Query to get all users
// create Query to get a single user
const typeDefs = gql`

    type User {
        _id: ID
        username: String
        email: String
    }

    type Query {
        helloWorld: String
        users: [User]
    }
`

module.exports = typeDefs