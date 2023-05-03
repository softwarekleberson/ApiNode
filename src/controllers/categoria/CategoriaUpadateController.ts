import { Request, Response, response } from "express";
import { categoriaRepository } from "../../repositores/CategoriaRepository";
import { BadRequestError, NotFoundError } from "../../helpers/api-erros";


export class CategoriaUpdateController {

    async update (req: Request, res: Response){

        const { id } = req.body
        const {nome} = req.body

        if(!id || isNaN(parseInt(id))){
            throw new BadRequestError('Id da categoria invalido')
        }

        const categoriaId = parseInt(id)
        const categoria = await categoriaRepository.findOne({ where: { id: categoriaId } });

        if(!categoria){
            throw new NotFoundError('Categoria não existe')
        }

        //Verifica se houve mudança, upadate
        if(nome){
            categoria.nome = nome
        }

        //salva no banco
        await categoriaRepository.save(categoria)
        return res.status(200).json(categoria)
    }

}