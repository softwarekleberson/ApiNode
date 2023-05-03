import { Request, Response, response } from "express";
import { categoriaRepository } from "../../repositores/CategoriaRepository";
import { BadRequestError, NotFoundError } from "../../helpers/api-erros";

export class CategoriaListController {

    async list(req: Request, res: Response){
        
        const categorias = await categoriaRepository.find();

        if(categorias.length == 0){
            throw new NotFoundError('Nada Encontrado')
        }

        return res.json(categorias)
    }

}