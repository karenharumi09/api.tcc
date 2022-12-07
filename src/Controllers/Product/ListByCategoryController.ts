import { Request, Response } from "express";
import { ListProductByCategoryService } from "../../Services/Product/ListProductByCategoryService";


const ListProductByCategoryController = {
    async handle(req: Request, res: Response) {

      const category_id = req.query.category_id as string;

        const response = await ListProductByCategoryService.execute({ category_id })

        return res.json(response)
    }
}

export { ListProductByCategoryController }