const { User } = require('../models')
const { AuthenticationError } = require('apollo-server-express')

const resolvers = {
    Query: {
        helloWorld: () => {
            return 'Hello world!'
        },
        users: async () => {
            // params will be sent to the Mongoose methods
            // if there's a username...params === username
            // otherwise...params = {}
            return User.find()
        },
        user: async (parent, { username }) => {
            return User.findOne({ username })
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args)
            return user
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email })

            console.log('HELLO', user)

            if (!user) {
                throw new AuthenticationError('Incorrect credentials')
            }

            const correctPw = await user.isCorrectPassword(password)

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials')
            }

            return user
        }
    }
}

module.exports = resolvers