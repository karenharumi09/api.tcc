import prismaClient from "../../prisma"


const ListUsersService = {
    async execute() {

        const users = await prismaClient.user.findMany({
            select: {
                id: true,
                email: true,
                name: true,
                is_admin: true,
            }
        })

        return users

    }
}

export { ListUsersService }