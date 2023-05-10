import { gql } from '@apollo/client'

export const mediaType = gql`
  type Image {
    id: ID!
    url: String!
    imageableType: String
    imageableId: String
    posts: [Post]
    stores: [Store]
    createdAt: String
    updateAt: String
    deleted: Boolean
    deletedAt: String
  }

  type GalleryImage {
    id: String!
    galleryType: String
    galleryId: String
  }

  type Query {
    gallery: [Image]
  }
`
