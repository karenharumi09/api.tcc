import { Request, Response } from "express";
import { ListOrdersService } from "../../Services/Order/ListOrdersService";

const ListOrdersController = {
    async handle(req: Request, res: Response) {
 
        const response = await ListOrdersService.execute()
        return res.json(response)
    }
}

export { ListOrdersController }