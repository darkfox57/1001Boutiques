import { prisma } from '@/lib/prisma'
import { blogResolver } from '@/lib/resolvers/blogResolver'
import { userResolver } from '@/lib/resolvers/userResolver'
import { blogType } from '@/lib/types/blogType'
import { userType } from '@/lib/types/userType'
import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { PrismaClient } from '@prisma/client'

export type Context = {
  prisma: PrismaClient
}
const apolloServer = new ApolloServer<Context>({
  typeDefs: [userType, blogType],
  resolvers: [userResolver, blogResolver],
})

export default startServerAndCreateNextHandler(apolloServer, {
  context: async (req, res) => ({ req, res, prisma }),
})
