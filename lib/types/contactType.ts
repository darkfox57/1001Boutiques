import { gql } from '@apollo/client'

export const contactType = gql`
  type Contact {
    id: ID!
    name: String!
    email: String!
    content: String!
    createdAt: String
    updatedAt: String
    deleted: Boolean
    deletedAt: String
  }

  type Query {
    contacts: [Contact]
  }
`
