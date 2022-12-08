import prismaClient from "../../prisma"
import { hash } from 'bcrypt'


interface UserRequest {
    name: string
    email: string
    password: string
}

const CreateUserService = {
    async execute({ name, email, password }: UserRequest) {


        if(!email) throw new Error('Email Inválido')
        if(password == '') throw new Error("Digite Senha")
        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email
            }
        })

        if(userAlreadyExists) throw new Error('Email já Cadastrado')
        
        const hashedPassword = await hash(password, 10)

        
        const user = await prismaClient.user.create({
            data: {
                name,
                email,
                password: hashedPassword
            },
            select: {
                id: true,
                name: true,
                email: true
            }
        })

        return user
    }
}

export { CreateUserService }