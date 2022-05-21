const { User } = require('../models')

const resolvers = {
    Query: {
        helloWorld: () => {
            return 'Hello world!'
        },
        users: async (parent, { username }) => {
            // params will be sent to the Mongoose methods
            // if there's a username...params === username
            // otherwise...params = {}
            const params = username ? { username } : {}
            return User.find(params)
        }
    },
    Mutation: {
        addUser: async(parent, args) => {
            const user = await User.create(args)
            return user
        }
    }
}

module.exports = resolvers