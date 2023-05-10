import { gql } from '@apollo/client'

export const categoriesType = gql`
  type Category {
    id: ID!
    name: String
    count: String!
    author: [User]
    posts: [Post]
  }

  type Query {
    categories: [Category]
  }
  type Mutation {
    addCategory(name: String!): Category
  }
`
