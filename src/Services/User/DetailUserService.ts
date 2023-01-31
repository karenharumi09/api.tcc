import prismaClient from "../../prisma"


const DetailUserService = {
    async execute(user_id: string){

        const user = await prismaClient.user.findFirst({ 
            where: { id: user_id }, 
            select: {
                id: true,
                name: true,
                email: true,
                is_admin: true
                
            }
        })

        return user

    }
}

export { DetailUserService }