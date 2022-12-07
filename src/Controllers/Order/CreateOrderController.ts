import { Request, Response } from "express";
import { CreateOrderService } from "../../Services/Order/CreateOrderService";

const CreateOrderController = {
    async handle(req: Request, res: Response) {
      
      const { table, name } = req.body;

        const response = await CreateOrderService.execute({ table, name})
        return res.json(response)
    }
}

export { CreateOrderController }