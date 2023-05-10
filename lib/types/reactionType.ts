import { gql } from '@apollo/client'

export const reactionType = gql`
  type Reaction {
    id: String!
    value: Valor!
    reactionableType: String
    reactionableId: String
    valueLike: Int
    valueDislike: Int
    author: User!
  }

  enum Valor {
    LIKE
    DISLIKE
  }

  type Query {
    reactions: [Reaction]
  }
`
