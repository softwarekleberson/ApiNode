import { Request, Response } from "express";
import { produtoRepository } from "../../repositores/ProdutoRepository";
import { BadRequestError, NotFoundError } from "../../helpers/api-erros";

export class ProdutoListController {
    
    async list(req: Request, resp: Response){

        const produtos = await produtoRepository.find();

        if(produtos.length == 0){
            throw new NotFoundError('Nada Encontrado')
        }

        return resp.json(produtos)
    }
}