import { Request, Response } from "express";
import { entregaRepository } from "../../repositores/EntregaRepository";
import { BadRequestError, NotFoundError } from "../../helpers/api-erros";

export class EntregaDeleteController {
    
    async delete (req: Request, res: Response){
        const { id } = req.body

        if(!id || isNaN(parseInt(id))){
            throw new BadRequestError('O ID da entrega é inválido')
        }

        const entregaId = parseInt(id)
        const entrega = await entregaRepository.findOne({ where: { id: entregaId }})

        if(!entrega){
            throw new NotFoundError('Entrega não existe')
        }

        await entregaRepository.remove(entrega)
        return res.status(200).json(entrega)
    }
}