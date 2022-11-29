import prismaClient from "../../prisma"


const DetailUserService = {
    async execute(user_id: string){

        const user = await prismaClient.user.findFirst({ 
            where: { id: user_id }, 
            select: {
                id: true,
                email: true,
                password: true
            }
        })

        return user

    }
}

export { DetailUserService }