import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Card {
    id: ID!
    type: String
    url: String
    css: String
    server_id: Int
    category_tag: String
    description: String
    followers_count: Int
    is_contest: Boolean
    is_starred: Boolean
    popularity_score: Int
    is_promoted: Boolean
    is_featured: Boolean
    hidden: Boolean
    feed_image_url: String
    feed_image_width: Int
    feed_image_height: Int
    image_url: String
    image_width: Int
    image_height: Int
    name: String
    gems_count: Int
    finds_count: Int
    moderated: Boolean
  }

  type Query {
    me: User
    cards(limit: Int, offset: Int): [Card!]!
  }
  type User {
    id: ID!
    email: String!
  }
  type Mutation {
    register(email: String!, password: String!): Boolean!
    login(email: String!, password: String!): User
    createCard(
      name: String
      description: String
      css: String
      feed_image_url: String
      feed_image_height: Int
      feed_image_width: Int
      image_url: String
      image_height: Int
      image_width: Int
    ): Card
  }
`;
