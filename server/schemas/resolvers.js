const User = require('../models/User')

const resolvers = {
    Query: {
        helloWorld: () => {
            return 'Hello world!'
        },
        users: async () => {
            return User.find()
        }
    }
}

module.exports = resolvers