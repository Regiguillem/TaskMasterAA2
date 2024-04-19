//Definimos las funciones que se ejecutarán cuando lleguen las consultas basadas en el tipos de datos.

//utilizaremos un paquete gql para trabajar con GraphQL y graphql-tools

const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

module.exports = { typeDefs: typeDefs };
