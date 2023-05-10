import { gql } from '@apollo/client'

export const mediaType = gql`
  type Image {
    id: ID!
    url: String!
    post: [Post]
    store: [Store]
    createdAt: String
    updatedAt: String
    deleted: Boolean
  }

  type GalleryImage {
    id: ID!
  }

  type Query {
    gallery: [Image]
  }
`
