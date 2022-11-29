import { Request, Response } from "express";
import { CreateCategoryService } from "../../Services/Category/CreateCategoryService";

const CreateCategoryController = {
    async handle(req: Request, res: Response) {
        
        const response = await CreateCategoryService.execute()
        return res.json(response)
    }
}

export { CreateCategoryController }