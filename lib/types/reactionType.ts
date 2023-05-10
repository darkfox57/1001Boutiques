import { gql } from '@apollo/client'

export const reactionType = gql`
  type Reaction {
    id: ID!
    value: String
    valueLike: Int
    valueDislike: Int
    author: [User]
  }

  type Query {
    reactions: [Reaction]
  }
`
