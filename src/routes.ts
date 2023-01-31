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
import { ListProductByCategoryController } from "./Controllers/Product/ListByCategoryController";
import { CreateOrderController } from "./Controllers/Order/CreateOrderController";
import { DeleteOrderController } from "./Controllers/Order/DeleteOrderController";
import { AddItemController } from "./Controllers/Order/AddItemController";
import { DeleteItemController } from "./Controllers/Order/DeleteItemController";
import { UpdateOrderStatusController } from "./Controllers/Order/UpdateOrderStatusController";
import { ListOrdersController } from "./Controllers/Order/ListOrdersController";
import { DetailOrderController } from "./Controllers/Order/DetailOrderController";
import { FinishOrderController } from "./Controllers/Order/FinishOrderController";
import { DeleteCategoryController } from "./Controllers/Category/DeleteCategoryController";
import { ListCategoryAndProductsController } from "./Controllers/Category/ListCategoryAndProductsController";
import { ListUsersController } from "./Controllers/User/ListUsersController";
import { DeleteUserController } from "./Controllers/User/DeleteUserController";
import { UpdateUserController } from "./Controllers/User/UpdateUserController";

const router = Router()








// Rotas De Usuário
router.post('/users/create', CreateUserController.handle)
router.delete('/users/remove', Authenticated, DeleteUserController.handle )
router.post('/users/auth', AuthUserController.handle)
router.get('/me', Authenticated, DetailUserController.handle)
router.get('/users/list', Authenticated, ListUsersController.handle)
router.put('/users/update', Authenticated,  UpdateUserController.handle)


// Rotas de Categoria

router.post('/category/create', Authenticated, CreateCategoryController.handle)
router.get('/category/list', Authenticated, ListCategoryController.handle)
router.delete('/category/remove', Authenticated, DeleteCategoryController.handle)
router.get('/category/products', ListCategoryAndProductsController.handle)

// Rotas de Produtos

router.post('/product/create', Authenticated, multer(multerConfig).single("file"), CreateProductController.handle)
router.get('/category/product', Authenticated, ListProductByCategoryController.handle)

// Rotas de Pedido

router.post('/order/create', Authenticated, CreateOrderController.handle)
router.delete('/order/remove', Authenticated, DeleteOrderController.handle)

router.post('/order/item/add', Authenticated, AddItemController.handle)
router.delete('/order/item/remove', Authenticated, DeleteItemController.handle)

router.put('/order/draft', Authenticated, UpdateOrderStatusController.handle)

router.get('/orders', Authenticated, ListOrdersController.handle)

router.get('/order/detail', Authenticated, DetailOrderController.handle)

router.put('/order/finish', Authenticated, FinishOrderController.handle)

export { router }