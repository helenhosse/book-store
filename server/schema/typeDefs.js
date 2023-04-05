const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Product {
    _id: ID
    title: String
    author: String
    firstSentence: String
    image: String
    quantity: Int
    price: Float
    year: Int
  }
  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
  }
 # type Checkout {
  #  session: ID
  #}
  type Auth {
    token: ID
    user: User
  }
  type Query {
    # products(title: String): [Product]
    products: [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    # checkout(products: [ID]!): Checkout
  }
  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    login(
      email: String!
      password: String!
    ): Auth
    addOrder(
      products: [ID]!
    ): Order
    updateUser(
      firstName: String, 
      lastName: String, 
      email: String, 
      password: String
      ): User
    addProduct(
      title: String!
      author: String!
      firstSentence: String
      image: String!
      quantity: String
      year: String!

    ): Product
  }
`;


  module.exports = typeDefs;