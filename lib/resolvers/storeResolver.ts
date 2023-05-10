import { PrismaClient } from '@prisma/client'

export type Context = {
  prisma: PrismaClient
}

export const storeResolver = {
  Query: {
    getStores: async (
      parent: any,
      args: any,
      context: { prisma: any },
      info: any
    ) => {
      const allStores = await context.prisma.store.findMany()

      return allStores
    },
  },
  Mutation: {
    addStore: async (parent: any, args: any, context: { prisma: any }) => {
      const newStore = await context.prisma.store.create({
        data: {
          ...args,
        },
      })

      return newStore
    },
    updateStore: async (parent: any, args: any, context: { prisma: any }) => {
      const updatedStore = await context.prisma.store.update({
        where: {
          id: args.id,
        },
        data: {
          ...args,
        },
      })

      return updatedStore
    },
  },
}
