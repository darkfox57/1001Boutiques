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
    contacts: async (_parent: any, _args: any, context: { prisma: any }) => {
      return await context.prisma.contact.findMany()
    },
    authors: async (_parent: any, _args: any, context: { prisma: any }) => {
      return await context.prisma.author.findMany()
    },
    getUsers: async (parent: any, args: any, context: { prisma: any }) => {
      return await context.prisma.user.findMany()
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
