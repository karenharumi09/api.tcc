import { Request, Response } from "express";
import { DeleteUserService } from "../../Services/User/DeleteUserService";

const DeleteUserController = {
    async handle(req: Request, res: Response) {
        const user_id = req.query.user_id as string
        
        const response = await DeleteUserService.execute({
            user_id
        })
        return res.json(response)
    }
}

export { DeleteUserController }