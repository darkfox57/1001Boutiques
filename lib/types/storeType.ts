import { gql } from '@apollo/client'

export const storeType = gql`
  type Store {
    id: ID!
    title: String!
    subTitle: String
    slug: String
    featured_img: Image
    phone: String
    location: [String]
    address: String
    website: String
    video: String
    email: String
    tags: Tag
    socials: [Social]
    timetables: [TimeTable]
    status: Status
    views: Int
    deleted: Boolean!
    deletedAt: String
  }

  type Social {
    id: ID!
    name: String!
    url: String!
  }

  type TimeTable {
    id: ID!
    dayOfWeek: String!
    openingTime: String!
    closingTime: String!
  }

  enum Status {
    PUBLISHED
    DRAFT
    HIDDEN
  }

  type Query {
    getStores: [Store]
    getStore(id: ID): Store
  }
  type Mutation {
    addStore(
      title: String!
      subTitle: String
      slug: String!
      featured_img: String
      phone: String
      location: [String]
      address: String
      website: String
      video: String
      email: String
      status: Status
    ): Store!
    updateStore(
      id: ID!
      title: String!
      subTitle: String
      slug: String!
      featured_img: String
      phone: String
      location: [String]
      address: String
      website: String
      video: String
      email: String
      status: Status
    ): Store!
  }
`
