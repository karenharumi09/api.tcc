import prismaClient from "../../prisma"


const UpdateUserService = {
    async execute({ id, name, email, is_admin }) {

        const user = await prismaClient.user.update({
            where: {
                id: id
            },
            data: {
                name,
                email,
                is_admin,
            }
        })


        return user
    }
}

export { UpdateUserService }