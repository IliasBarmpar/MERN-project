const { ApolloServer } = require('apollo-server'); 
const mongoose = require('mongoose'); // We need this to connect to our database (MongoDB)

//const Post = require('./model/Post) 
//const typeDefs = gql`
//  type Post{
//      id: ID!
//      body: String!
//      createdAt: String!
//      username: String!
//  }
//  type Query {
//      getPosts: [Post]
//  }
//  `;
//
//const resolvers = {
//  Query: {
//      async getPosts(){
//         try{
//             const posts = await Post.find();
//             return posts;
//         } catch (err){
//             throw new Error(err);
//         }
//     }
//  }
//};

const typeDefs = require('./graphql/typeDefs') // We must have them (imported from gql), these are GraphQL types 
const resolvers = require('./graphql/resolvers') // These are the resolvers of the above types
const { MONGODB } = require('./config.js') // It is better to make a config file and put it on gitignore, where you can save sensitive data

// Setup ApolloServer, takes typeDefs and resolvers
const server = new ApolloServer({
    typeDefs,
    resolvers
});

// We need to connect to Mongo before starting our Server.
mongoose.connect(MONGODB, { useNewUrlParser: true}) // we need usenewurlparser by default
    .then(()=>{
        console.log('MongoDB Connected');
        return server.listen({port:5000})
    })
    .then(res=> {
        console.log(`Server running at ${res.url}`)
    })

// runs with node index
// server.listen({ port:5000 })
//     .then(res=> {
//         console.log(`Server running at ${res.url}`)
//     })

