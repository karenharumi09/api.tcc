import { Request, Response } from "express";
import { CreateProductService } from "../../Services/Product/CreateProductService";


const CreateProductController = {
    async handle(req: Request, res: Response) {

        const { name, price, description, category_id } = req.body;
        
        if(!req.file){
            throw new Error('Erro Upload Foto') 
        }else{
            const { location, filename}= req.file;
            
            const banner = location || filename

            const response = await CreateProductService.execute({ name, price, description, banner, category_id })

            return res.json(response)
        }
      
    }
}

export { CreateProductController }