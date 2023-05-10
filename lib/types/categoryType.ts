import { gql } from '@apollo/client'

export const categoriesType = gql`
  type Category {
    id: ID!
    name: String!
    count: Int
    contentType: String
    modelId: String
    posts: [Post]
  }

  type Query {
    categories: [Category]
  }
  type Mutation {
    addCategory(name: String!): Category
  }
`
