// import gql
const {gql} = require('apollo-server-express')

// create typeDefs
const typeDefs = gql`
    type Query {
        helloWorld: String
    }
`

module.exports = typeDefs