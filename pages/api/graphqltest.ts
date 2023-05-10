import { prisma } from '@/lib/prisma'
import { blogResolver } from '@/lib/resolvers/blogResolver'
import { userResolver } from '@/lib/resolvers/userResolver'
import { blogType } from '@/lib/types/blogType'
import { categoriesType } from '@/lib/types/categoryType'
import { commentsType } from '@/lib/types/commentType'
import { contactType } from '@/lib/types/contactType'
import { mediaType } from '@/lib/types/mediaType'
import { reactionType } from '@/lib/types/reactionType'
import { storeType } from '@/lib/types/storeType'
import { tagsType } from '@/lib/types/tagType'
import { userType } from '@/lib/types/userType'
import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { PrismaClient } from '@prisma/client'

export type Context = {
  prisma: PrismaClient
}
const apolloServer = new ApolloServer<Context>({
  typeDefs: [
    userType,
    blogType,
    categoriesType,
    commentsType,
    contactType,
    storeType,
    reactionType,
    tagsType,
    mediaType,
  ],
  resolvers: [userResolver, blogResolver],
})

export default startServerAndCreateNextHandler(apolloServer, {
  context: async (req, res) => ({ req, res, prisma }),
})
