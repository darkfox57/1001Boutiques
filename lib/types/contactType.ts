import { gql } from '@apollo/client'

export const contactType = gql`
  type Contact {
    id: ID!
    name: String
    email: String
    content: String
    CreatedAt: String
    UpdatedAt: String
    deletedAt: Boolean
  }

  type Query {
    contacts: [Contact]
  }
`
