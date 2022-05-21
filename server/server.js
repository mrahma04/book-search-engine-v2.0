const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');

// import Apollo servers
const { ApolloServer } = require('apollo-server-express')

// import typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas')

const app = express();
const PORT = process.env.PORT || 4001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// app.use(routes);

// create new Apollo server
const server = new ApolloServer({
  typeDefs,
  resolvers
})

// create new instance of Apollo server and start
const startApolloSever = async (typeDefs, resolvers) => {
  await server.start()
  // integrate Apollo server with Express application as middleware
  server.applyMiddleware({ app })
}

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`🌍 Now listening on localhost:${PORT}`)
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`)
  });
});

// call the async function to start the server
startApolloSever(typeDefs, resolvers)