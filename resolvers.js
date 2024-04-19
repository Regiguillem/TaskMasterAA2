const resolvers = {
  Query: {
    hello: () => "Hola desde Apollo Server",
  },
};

module.exports = { resolvers: resolvers };
