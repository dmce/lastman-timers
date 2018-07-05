const { Prisma } = require('prisma-binding');

require('dotenv').config();

const prisma = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: process.env.PRISMA_ENDPOINT,
});

const input = {
  apiId: 2021,
  name: 'Premier League',
  area: 'England',
};

prisma.mutation
  .upsertCompetition(
    {
      where: { apiId: input.apiId },
      update: input,
      create: input,
    },
    null
  )
  .catch(error => console.log(error));
