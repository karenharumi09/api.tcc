import { Request, Response } from "express";
import { FinishOrderService } from "../../Services/Order/FinishOrderService";

const FinishOrderController = {
    async handle(req: Request, res: Response) {

      const { order_id } = req.body;
 
        const response = await FinishOrderService.execute({ order_id })
        return res.json(response)
    }
}

export { FinishOrderController }