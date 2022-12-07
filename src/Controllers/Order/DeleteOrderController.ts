import { Request, Response } from "express";
import { DeleteOrderService } from "../../Services/Order/DeleteOrderService";

const DeleteOrderController = {
    async handle(req: Request, res: Response) {

      const order_id = req.query.order_id as string;
 
        const response = await DeleteOrderService.execute({ order_id })
        return res.json(response)
    }
}

export { DeleteOrderController }