import prismaClient from "../../prisma"


const ListCategoryService = {
    async execute() {
      const categories = prismaClient.category.findMany({
        select: {
          id: true,
          name: true,
        }
      })

      return categories
    }
}

export { ListCategoryService }