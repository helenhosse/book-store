const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
require("dotenv").config();
const connectDB = require('./config/connection');
const mongoose = require('mongoose';)
const PORT = process.env.PORT || 3001;

connectDB();

app.use(logger);
app.use(credentials);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// need to add apolloserver, middleware and static assets once made and graphQL