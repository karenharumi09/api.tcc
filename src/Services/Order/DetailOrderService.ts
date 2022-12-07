import prismaClient from "../../prisma"

interface OrderRequest{
  order_id: string,
}


const DetailOrderService = {
    async execute({ order_id }: OrderRequest) {

      const orders = await prismaClient.item.findMany({
        where: {
          order_id
        },
        include: {
          product: true,
          order: true,
        }
      })

      return orders
    }
}

export { DetailOrderService }