import { gql } from '@apollo/client'

export const storeType = gql`
  type Store {
    id: ID!
    title: String!
    subtitle: String
    slug: String
    phone: String
    address: String
    website: String
    video: String
    email: String
    featured_img: [Image]
    location: [String]
    tags: [Tag]
    socials: [Social]
    status: String
    views: Int
  }

  type Social {
    id: ID!
    name: String!
    url: String!
  }

  type Query {
    stores: [Store]
  }
`
