import { Request, Response } from "express";
import { produtoRepository } from "../../repositores/ProdutoRepository";
import { ProdutoValidator } from "../../validacao/produto/ProdutoValidator";


export class ProdutoCreateController {
    async create(req: Request, res: Response){

        ProdutoValidator.valide(req)
        const { descricao, preco, url } = req.body

        const novoProduto = produtoRepository.create({descricao, preco, url})
        await produtoRepository.save(novoProduto)
        return res.status(201).json(novoProduto)
    }
}