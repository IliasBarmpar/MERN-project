const {gql} = require('apollo-server');

// here we put all of our queries and define what type they return for example
// a post returns id, body, createdAt and Username
module.exports = gql` 
    type Post{
        id: ID!
        body: String!
        createdAt: String!
        username: String!
    }
    type User{
        id: ID!
        email: String!
    }
    input RegisterInput{
        username: String!
        password: String!
        confirmPassword: String!
        email: String!
    }
    type Query{
        getPosts: [Post]
    }
    type Mutation{
        register(registerInput: RegisterInput): User!
    }
`