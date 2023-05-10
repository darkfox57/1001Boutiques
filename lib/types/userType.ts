export const userType = `#graphql
type User {
  id: ID!
  email: String
  name: String
}
type Query {
  getUsers: [User]
}
type Mutation {
  addUser (name: String!, email: String) : User
}
`
