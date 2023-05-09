import { prisma } from '@/prisma/db'
import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { PrismaClient } from '@prisma/client'

export type Context = {
  prisma: PrismaClient
}

const typeDefs = `#graphql
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
`

const resolvers = {
  Query: {
    blog: async (parent: any, args: any, context: { prisma: any }) => {
      return await context.prisma.post.findMany()
    },
    post: async (parent: any, { slug }: any, context: { prisma: any }) => {
      return await context.prisma.post.findUnique({
        where: {
          slug: slug,
        },
      })
    },
  },
}

const apolloServer = new ApolloServer<Context>({
  typeDefs,
  resolvers,
})

export default startServerAndCreateNextHandler(apolloServer, {
  context: async (req, res) => ({ req, res, prisma }),
})
