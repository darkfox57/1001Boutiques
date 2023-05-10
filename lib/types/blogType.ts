import { gql } from '@apollo/client'

export const blogType = gql`
  type Post {
    id: ID!
    title: String!
    slug: String!
    content: String
    featured_img: [Image]
    author: [User]
    tags: [Tag]
    categories: [Category]
    comments: [Comment]
    createdAt: String
    updatedAt: String
    deletedAr: Boolean
  }

  type Query {
    post(id: ID): Post
    blog: [Post]
  }
  type Mutation {
    addBlog(title: String!, slug: String!, content: String): Post
  }
`
