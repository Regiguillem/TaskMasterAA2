const { connectToDatabase } = require("./app/config/database");
const { ApolloServer, gql } = require("apollo-server-express");
const express = require("express");
require("dotenv").config();

const { typeDefs } = require("./typeDefs");
const { resolvers } = require("./resolvers");

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function startApolloServer(typeDefs, resolvers) {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });

  app.listen(process.env.PORT, () => {
    console.log(
      `Servidor corriendo en http://localhost:${process.env.PORT}${server.graphqlPath})`,
    );
  });
}

startApolloServer(typeDefs, resolvers);

//En el terminal: escribir "node server.js" para iniciar el servidor2
//Una vez iniciado el servidor podemos acceder a él desde:
//http://localhost:8000/graphql
//En codesandbox:
//https://w45y2x-8000.csb.app/graphql
