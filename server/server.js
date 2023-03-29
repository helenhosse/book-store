const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
require("dotenv").config();

const { authMiddleware } = require('./utils/auth');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());



// need to add apolloserver, middleware and static assets once made and graphQL


