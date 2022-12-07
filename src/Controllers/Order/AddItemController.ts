import { Request, Response } from "express";
import { AddItemService } from "../../Services/Order/AddItemService";

const AddItemController = {
    async handle(req: Request, res: Response) {
      
        const { order_id, product_id, amount } = req.body;

        const response = await AddItemService.execute({ order_id, product_id, amount })
        return res.json(response)
    }
}

export { AddItemController }