import { Request, Response } from "express";
import { UpdateUserService } from "../../Services/User/UpdateUserService";

const UpdateUserController = {
    async handle(req: Request, res: Response) {

        const { id,
            email,
            is_admin,
            name,
        } = req.body;

        const response = await UpdateUserService.execute({
            id,
            email,
            is_admin,
            name,
        })
        return res.json(response)
    }
}

export { UpdateUserController }