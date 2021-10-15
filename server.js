var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
var {getUser, retrieveUsers, updateUser} = require('./users')

// Initialize a GraphQL schema
var schema = buildSchema(`
    type Query {
        user(id: Int!): Person
        users(shark: String): [Person]
    },
    type Person {
        id: Int
        name: String
        age: Int
        shark: String
    }
    type Mutation {
        updateUser(id: Int!, name: String!, age: String): Person
    }
`);

// Root resolver
var root = {
  hello: () => 'Hello world!',
  user: getUser, 
  users: retrieveUsers,
  updateUser: updateUser

};

// Create an express server and a GraphQL endpoint
var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,  // Must be provided
  rootValue: root,
  graphiql: true,  // Enable GraphiQL when server endpoint is accessed in browser
}));


app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));

