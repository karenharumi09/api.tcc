import { Request, Response } from "express";
import { DeleteItemService } from "../../Services/Order/DeleteItemService";

const DeleteItemController = {
    async handle(req: Request, res: Response) {
        
        const item_id = req.query.item_id as string;

        const response = await DeleteItemService.execute({ item_id })
        return res.json(response)
    }
}

export { DeleteItemController }