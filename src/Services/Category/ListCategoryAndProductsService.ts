import prismaClient from "../../prisma"


const ListCategoryAndProductsService = {
    async execute() {
      const categories = prismaClient.category.findMany({
        select: {
          id: true,
          name: true,
          products: true
        }
      })

      return categories
    }
}

export { ListCategoryAndProductsService }