const typeDefs = `#graphql
type User {
  id: ID!
  email: String
  name: String
}

  type Contact {
    id: ID!
    name: String
    email: String
    content: String
    CreatedAt: String
    UpdatedAt: String
  }

  type Author {
    id: ID!
    name: String
    email: String
    posts: [Post]
  }

  type Post {
    id: ID!
    title: String!
    featured_img: String
    slug: String!
    content: String
    createdAt: String
    updatedAt: String
    author: [Author]
  }

  type Query {
   getUsers: [User]
    post(id: ID): Post
    blog: [Post]
    contacts: [Contact]
    authors: [Author]
  }
  type Mutation {
    addBlog (title: String!, featured_img: String, slug: String!, content: String) : Post
  }
`
export default typeDefs
