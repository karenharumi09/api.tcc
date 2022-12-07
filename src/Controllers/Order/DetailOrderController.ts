import { Request, Response } from "express";
import { DetailOrderService } from "../../Services/Order/DetailOrderService";

const DetailOrderController = {
    async handle(req: Request, res: Response) {

      const order_id = req.query.order_id as string;
 
        const response = await DetailOrderService.execute({ order_id })
        return res.json(response)
    }
}

export { DetailOrderController }