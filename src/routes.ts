import { Router } from "express";


import { CreateCategoryController } from "./Controllers/Category/CreateCategoryController";
import { ListCategoryController } from "./Controllers/Category/ListCategoryController";
import { CreateProductController } from "./Controllers/Product/CreateProductController";


import { AuthUserController } from "./Controllers/User/AuthUserController";
import { CreateUserController } from "./Controllers/User/CreateUserController";
import { DetailUserController } from "./Controllers/User/DetailUserController";
import { Authenticated } from "./Middlewares/Authenticated";

import multerConfig from './config/multer'
import multer from "multer";

const router = Router()








// Rotas De Usuário
router.post('/users/create', CreateUserController.handle)
router.post('/users/auth', AuthUserController.handle)
router.get('/me', Authenticated ,DetailUserController.handle)


// Rotas de Categoria

router.post('/category/create', Authenticated, CreateCategoryController.handle)
router.get('/category/list', Authenticated, ListCategoryController.handle)

// Rotas de Produtos

router.post('/product/create', Authenticated, multer(multerConfig).single("file"), CreateProductController.handle)

export { router }