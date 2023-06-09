import { PrismaClient } from '@prisma/client'

export type Context = {
  prisma: PrismaClient
}

export const userResolver = {
  Query: {
    getUsers: async (parent: any, args: any, context: { prisma: any }) => {
      return await context.prisma.user.findMany()
    },
    getUser: async (parent: any, args: any, context: { prisma: any }) => {
      return await context.prisma.user.findUnique({
        where: {
          id: args.id,
        },
      })
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
    updateUser: async (parent: any, args: any, context: { prisma: any }) => {
      const updatedUser = await context.prisma.user.update({
        where: {
          id: args.id,
        },
        data: {
          ...args,
        },
      })

      return updatedUser
    },
  },
}
