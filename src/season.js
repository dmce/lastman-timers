const { Prisma } = require('prisma-binding');

require('dotenv').config();

const prisma = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: process.env.PRISMA_ENDPOINT,
});

const input = {
  apiId: 1,
  startDate: '2018-06-14T17:00:00Z',
  endDate: '2018-07-15T17:00:00Z',
  currentMatchday: 3,
  competitionId: 'cjj8oi4v5000g0786pl7e2wde',
};

prisma.mutation
  .createSeason(
    {
      data: { input },
    },
    null
  )
  .catch(error => console.log(error));
