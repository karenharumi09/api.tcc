import { Router } from "express";


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




export { router }