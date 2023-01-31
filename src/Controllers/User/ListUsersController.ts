import { Request, Response } from "express";
import { ListUsersService } from "../../Services/User/ListUsersService";

const ListUsersController = {
    async handle(req: Request, res: Response) {
        
        const response = await ListUsersService.execute()
        return res.json(response)
    }
}

export { ListUsersController }