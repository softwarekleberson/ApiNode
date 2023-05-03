import { Router } from "express";


import { LoginController } from "./controllers/LoginController";
import { autentificacaoMiddleware } from "./middlewaresAltentificator/autentificacaoMiddleware";
import { CategoriaCreateController } from "./controllers/categoria/CategoriaCreateController";
import { CategoriaListController } from "./controllers/categoria/CategoriaListController";
import { CategoriaDeleteController } from "./controllers/categoria/CategoriaDeleteController";
import { CategoriaUpdateController } from "./controllers/categoria/CategoriaUpadateController";
import { EntregaCreateController } from "./controllers/entrega/EntregaCreateController";
import { EntregaListController } from "./controllers/entrega/EntregaListController";
import { EntregaDeleteController } from "./controllers/entrega/EntregaDeleteController";
import { EntregaUpdateController } from "./controllers/entrega/EntregaUpdateController";
import { ProdutoCreateController } from "./controllers/produto/ProdutoCreateController";
import { ProdutoListController } from "./controllers/produto/ProdutoListController";
import { ProdutoDeleteController } from "./controllers/produto/ProdutoDeleteController";
import { ProdutoUpdateController } from "./controllers/produto/ProdutoUpdateController";
import { VendaCreateController } from "./controllers/venda/VendaCreateController";
import { VendaListController } from "./controllers/venda/VendaListController";
import { VendaDeleteController } from "./controllers/venda/VendaDeleteController";
import { VendaUpdateController } from "./controllers/venda/VendaUpdateController";
import { UsuarioCreateController } from "./controllers/usuario/UsuarioCreateController";
import { UsuarioDeleteController } from "./controllers/usuario/UsuarioDeleteController";
import { UsuarioUpdateController } from "./controllers/usuario/UsuarioUpdateController";
import { UsuarioListController } from "./controllers/usuario/UsuarioListController";


const routes = Router()


routes.post('/usuario', new UsuarioCreateController().create)
routes.get('/profile', new LoginController().getProfile)
routes.post('/login', new LoginController().login)

routes.use(autentificacaoMiddleware)

routes.post('/categoria', new CategoriaCreateController().create)
routes.get('/categoria', new CategoriaListController().list)
routes.delete('/categoria', new CategoriaDeleteController().delete)
routes.put('/categoria', new CategoriaUpdateController().update)

routes.post('/entrega', new EntregaCreateController().create)
routes.get('/entrega', new EntregaListController().list)
routes.delete('/entrega', new EntregaDeleteController().delete)
routes.put('/entrega', new EntregaUpdateController().update)

routes.post('/produto', new ProdutoCreateController().create)
routes.get('/produto', new ProdutoListController().list)
routes.delete('/produto', new ProdutoDeleteController().delete)
routes.put('/produto', new ProdutoUpdateController().update)

routes.post('/venda', new VendaCreateController().create)
routes.get('/venda', new VendaListController().list)
routes.delete('/venda', new VendaDeleteController().delete)
routes.put('/venda', new VendaUpdateController().update)

routes.get('/usuario', new UsuarioListController().list)
routes.delete('/usuario', new UsuarioDeleteController().delete)
routes.put('/usuario', new UsuarioUpdateController().update)


export default routes