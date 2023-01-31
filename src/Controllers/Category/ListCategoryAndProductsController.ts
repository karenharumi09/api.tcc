import { Request, Response } from "express";
import { ListCategoryAndProductsService } from "../../Services/Category/ListCategoryAndProductsService";

const ListCategoryAndProductsController = {
    async handle(req: Request, res: Response) {

        const response = await ListCategoryAndProductsService.execute()
        
        return res.json(response)
    }
}

export { ListCategoryAndProductsController }