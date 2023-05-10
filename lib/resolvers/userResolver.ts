import { PrismaClient } from '@prisma/client'

export type Context = {
  prisma: PrismaClient
}

export const userResolver = {
  Query: {
    getUsers: async (parent: any, args: any, context: { prisma: any }) => {
      return await context.prisma.user.findMany()
    },
  },
  Mutation: {
    addUser: async (_parent: any, args: any, context: { prisma: any }) => {
      return await context.prisma.user.create({
        data: {
          ...args,
        },
      })
    },
  },
}
