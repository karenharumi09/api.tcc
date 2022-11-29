import { Request, Response } from "express";
import { DetailUserService } from "../../Services/User/DetailUserService";


const DetailUserController = {
    async handle(req: Request, res: Response) {
        const user_id = req.user_id;

        const response = await DetailUserService.execute(user_id)
        return res.json(response)
    }
}

export { DetailUserController }