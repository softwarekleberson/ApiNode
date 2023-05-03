import { Request, Response } from "express";
import { entregaRepository } from "../../repositores/EntregaRepository";
import { BadRequestError, NotFoundError } from "../../helpers/api-erros";
import { EntregaValidator } from "../../validacao/entrega/EntregaValidator";

export class EntregaCreateController {
    async create(req: Request, res: Response){
       
        EntregaValidator.valide(req)
        const { dataEntrega, observacao } = req.body

        const novaEntrega = entregaRepository.create({dataEntrega, observacao})

        await entregaRepository.save(novaEntrega)
        return res.status(201).json(novaEntrega)
    }

}