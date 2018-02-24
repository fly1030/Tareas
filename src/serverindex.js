import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import typeDefs from './schema';
import resolvers from './resolvers';
const { makeExecutableSchema } = require('graphql-tools');

const PORT = 8081;

// put together a schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const app = express();
const graphqlEndpoint = '/graphql';
// bodyParser is needed just for POST.
app.use(graphqlEndpoint, bodyParser.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: graphqlEndpoint }));

app.listen(PORT);
