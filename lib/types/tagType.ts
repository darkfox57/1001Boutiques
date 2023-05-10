import { gql } from '@apollo/client'

export const tagsType = gql`
  type Tag {
    id: ID!
    name: String!
    slug: String
    taggeableType: String
    taggeableId: String
    count: Int
    posts: [Post]
    stores: [Store]
  }

  type Query {
    tags: [Tag]
  }
  type Mutation {
    addTag(name: String!): Tag
  }
`
