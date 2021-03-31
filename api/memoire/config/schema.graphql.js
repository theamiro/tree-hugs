module.exports = {
  query: `
    memoiresCount(where: JSON): Int!
  `,
  resolver: {
    Query: {
      memoiresCount: {
        description: "Return the count of memoires",
        resolverOf: "application::memoires.memoire.count",
        resolver: async (obj, options, ctx) => {
          return await strapi.api.memoire.services.memoire.count(
            options.where || {}
          );
        },
      },
    },
  },
};
