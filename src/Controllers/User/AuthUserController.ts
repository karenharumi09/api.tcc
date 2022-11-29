import { Request, Response } from "express";
import { AuthUserService } from "../../Services/User/AuthUserService";

const AuthUserController = {
    async handle(req: Request, res: Response) {
        const { email, password } = req.body;
        
        const response = await AuthUserService.execute({
            email,
            password
        })
        return res.json(response)
    }
}

export { AuthUserController }