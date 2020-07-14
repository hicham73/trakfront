var { graphql, buildSchema, GraphQLBoolean } = require('graphql');

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

var root = { hello: () => 'Hello world!' };

graphql.
graphql(schema, '{ hello }', root).then((response) => {
  console.log(response.data.hello);
});