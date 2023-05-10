import { gql } from '@apollo/client'

export const userType = gql`
  type User {
    id: ID!
    name: String
    email: String
    password: String
    firstname: String
    lastname: String
    post: [Post]
    comments: [Comment]
    reactions: [Reaction]
    role: [Rol]
    createdAt: String
    updatedAt: String
    session: String
    deleted: Boolean
    deletedAt: String
  }

  type Rol {
    id: ID!
    name: String
  }

  type Query {
    getUsers: [User]
  }
  type Mutation {
    addUser(
      name: String!
      email: String
      password: String
      firstname: String
      lastname: String
      role: String
    ): User
  }
`
