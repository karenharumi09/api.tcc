import { Router } from "express";
import { CreateCategoryController } from "./Controllers/Category/CreateCategoryController";


import { AuthUserController } from "./Controllers/User/AuthUserController";
import { CreateUserController } from "./Controllers/User/CreateUserController";
import { DetailUserController } from "./Controllers/User/DetailUserController";
import { Authenticated } from "./Middlewares/Authenticated";


const router = Router()


// Rotas De Usuário
router.post('/users/create', CreateUserController.handle)
router.post('/users/auth', AuthUserController.handle)
router.get('/me', Authenticated ,DetailUserController.handle)


// Rotas Categoria

router.post('/category/create', Authenticated, CreateCategoryController.handle)


export { router }