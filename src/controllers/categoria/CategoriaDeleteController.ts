import { Request, Response, response } from "express";
import { categoriaRepository } from "../../repositores/CategoriaRepository";
import { BadRequestError, NotFoundError } from "../../helpers/api-erros";

export class CategoriaDeleteController {

    async delete(req: Request, res: Response){
        
        const { id } = req.body

        if (!id || isNaN(parseInt(id))) {
            throw new BadRequestError('O ID da categoria é inválido');
        }

        const categoriaId = parseInt(id);

        // Verifica se a categoria existe
        const categoria = await categoriaRepository.findOne({ where: { id: categoriaId } });
        if (!categoria) {
            throw new NotFoundError('A categoria não existe');
        }

        // Remove a categoria do banco de dados
        await categoriaRepository.remove(categoria)

        // Retorna a categoria excluída
        return res.status(200).json(categoria)

    }

}