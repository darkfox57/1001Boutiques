import { PrismaClient } from '@prisma/client'

export type Context = {
  prisma: PrismaClient
}

export const blogResolver = {
  Query: {
    blog: async (_parent: any, _args: any, context: { prisma: any }) => {
      return await context.prisma.post.findMany()
    },
    post: async (_parent: any, { slug }: any, context: { prisma: any }) => {
      return await context.prisma.post.findUnique({
        where: {
          slug: slug,
        },
      })
    },
  },
  Mutation: {
    addBlog: async (_parent: any, args: any, context: { prisma: any }) => {
      return await context.prisma.post.create({
        data: {
          ...args,
        },
      })
    },
  },
}
