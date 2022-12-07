import prismaClient from "../../prisma"

interface ProductRequest {
    category_id: string
}


const ListProductByCategoryService = {
    async execute({ category_id }: ProductRequest) {

        const findByCategory = await prismaClient.product.findMany({
            where:{
                category_id
            }
        })

        return findByCategory
    }
        
}

export { ListProductByCategoryService }