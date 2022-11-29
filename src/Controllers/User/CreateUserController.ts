import { Request, Response } from "express";
import { CreateUserService } from "../../Services/User/CreateUserService";


const CreateUserController = {
    async handle(req: Request, res: Response) {
        const { name, email, password } = req.body;

        const response = await CreateUserService.execute({
            name,
            email,
            password
        })
        return res.json(response)
    }
}

export { CreateUserController }