import { Request, Response } from "express";
import { produtoRepository } from "../../repositores/ProdutoRepository";
import { BadRequestError, NotFoundError } from "../../helpers/api-erros";

export class ProdutoDeleteController {
    
    async delete(req: Request, res: Response){

        const { id } = req.body

        if(!id || isNaN(parseInt(id))){
            throw new BadRequestError('O ID da entrega é inválido')
        }

        const produtoId = parseInt(id)
        const produto = await produtoRepository.findOne({ where: { id: produtoId }})

        if(!produto){
            throw new NotFoundError('Entrega não existe')
        }

        await produtoRepository.remove(produto)
        return res.status(200).json(produto)
    }
}