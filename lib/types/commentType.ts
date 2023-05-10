import { gql } from '@apollo/client'

export const commentsType = gql`
  type Comment {
    id: String!
    content: String!
    comentableType: CommentableType!
    comentableId: String!
    author: User!
    createdAt: String
    updatedAt: String
    deleted: Boolean!
    deletedAt: String
    post: [Post]
  }

  enum CommentableType {
    POST
    STORE
    IMAGE
  }

  type Query {
    comments: [Comment]
  }
  type Mutation {
    addComment(content: String!): Comment
  }
`
