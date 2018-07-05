const { Prisma } = require('prisma-binding');

require('dotenv').config();

const prisma = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: process.env.PRISMA_ENDPOINT,
});

const mutation = `
  mutation CreateMatch($matchId: Int!, $date: String!, $matchday: Int!, $stage: String!, $group: !String) {
    createMatch(data: { matchId: $matchId, date: $date, $matchday: matchday, stage: $stage, group: $group }) {
      matchId
      date
      matchday
      stage
      group
    }
  }
`;

const variables = {
  matchId: 1,
  date: '2018-07-01 15:00',
  matchday: 1,
  stage: 'Groups',
  group: 'Temp',
};

prisma.mutation
  .createMatch({ data: variables }, '{ matchId }')
  .then(console.log)
  .catch(error => console.log(error));
