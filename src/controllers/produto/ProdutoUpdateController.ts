import { Request, Response } from "express";
import { produtoRepository } from "../../repositores/ProdutoRepository";
import { BadRequestError, NotFoundError } from "../../helpers/api-erros";

export class ProdutoUpdateController {
   
    async update(req: Request, res: Response) {
        const { id } = req.body;
        const { descricao, preco, url } = req.body;

        if (!id || isNaN(parseInt(id))) {
            throw new BadRequestError('O ID do produto é inválido');
        }

        const produtoId = parseInt(id);
        let produto = await produtoRepository.findOne({ where: { id: produtoId } });

        if (!produto) {
            throw new NotFoundError('Produto não existe');
        }

        if (descricao) {
            produto.descricao = descricao;
        }

        if (preco) {
            produto.preco = preco;
        }

        if (url) {
            produto.url = url;
        }

        produto = await produtoRepository.save(produto);
        return res.status(200).json(produto);
    }
}