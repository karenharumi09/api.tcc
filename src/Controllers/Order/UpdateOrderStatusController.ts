import { Request, Response } from "express";
import { UpdateOrderStatusService } from "../../Services/Order/UpdateOrderStatusService";

const UpdateOrderStatusController = {
    async handle(req: Request, res: Response) {

      const { order_id } = req.body;
 
        const response = await UpdateOrderStatusService.execute({ order_id })
        return res.json(response)
    }
}

export { UpdateOrderStatusController }