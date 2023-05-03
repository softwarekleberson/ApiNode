import { Request, Response } from "express";
import { vendaRepository } from "../../repositores/VendaRepository";
import { BadRequestError, NotFoundError } from "../../helpers/api-erros";

export class VendaDeleteController {
    
    async delete (req: Request, res: Response){

        const { id } = req.body

        if(!id || isNaN(parseInt(id))){
            throw new BadRequestError('O ID da venda é inválido')
        }

        const vendaId = parseInt(id)
        const venda = await vendaRepository.findOne({ where: { id: vendaId }})

        if(!venda){
            throw new NotFoundError('Venda não existe')
        }

        await vendaRepository.remove(venda)
        return res.status(200).json(venda)
    }
}