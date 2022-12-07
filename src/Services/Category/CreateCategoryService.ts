import prismaClient from "../../prisma"

interface CategoryRequest{
    name: string
}

const CreateCategoryService = {
    async execute({ name }: CategoryRequest) {
        if( name === '') throw new Error('Nome Invalido')

        if(await prismaClient.category.findFirst({ where: { name } })) throw new Error('Categoria Ja Existente')

        const category = await prismaClient.category.create({
            data: {
                name
            },
            select: {
                id: true,
                name: true,
            }
        })

        return category
    }
}

export { CreateCategoryService }