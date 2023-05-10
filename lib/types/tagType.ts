import { gql } from '@apollo/client'

export const tagsType = gql`
  type Tag {
    id: ID!
    name: String
    slug: String
    count: String!
    posts: [Post]
    store: [Store]
  }

  type Query {
    tags: [Tag]
  }
  type Mutation {
    addTag(name: String!): Tag
  }
`
