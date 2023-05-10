import { gql } from '@apollo/client'

export const userType = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    firstname: String
    lastname: String
    posts: [Post]
    comments: [Comment]
    roles: [Rol]
    createAt: String
    updateAt: String
    session: String
    deleted: Boolean
    deletedAt: String
  }

  type Rol {
    id: ID!
    name: String!
    author: User
    users: [User]
  }

  type Query {
    getUsers: [User]
    getUser(id: ID): User
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
