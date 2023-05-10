import { gql } from '@apollo/client'

export const blogType = gql`
  type Post {
    id: ID!
    title: String!
    slug: String
    content: String
    featured_img: Image
    author: User
    categories: Category
    tags: Tag
    comments: Comment
    createdAt: String
    status: Status
    view: Int
    updatedAt: String
    deleted: Boolean
    deletedAt: String
  }

  enum Status {
    PUBLISHED
    DRAFT
    HIDDEN
  }
  type Query {
    getPost(id: ID): Post
    getPosts: [Post]
  }
  type Mutation {
    addBlog(title: String!, slug: String!, content: String): Post
  }
`
