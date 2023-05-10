import { gql } from '@apollo/client'

export const commentsType = gql`
  type Comment {
    id: ID!
    content: String
    author: User
    createdAt: String
    updatedAt: String
    deleted: Boolean
    # posts: [Post]
  }

  type Query {
    comments: [Comment]
  }
  type Mutation {
    addComment(content: String!): Comment
  }
`
