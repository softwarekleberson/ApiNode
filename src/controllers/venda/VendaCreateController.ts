import { Request, Response } from "express";
import { vendaRepository } from "../../repositores/VendaRepository";
import { BadRequestError, NotFoundError } from "../../helpers/api-erros";
import { VendaValidator } from "../../validacao/venda/VendaValidator";

export class VendaCreateController {
    async create(req: Request, res: Response){
       
        VendaValidator.valide(req)
        const { total, desconto, observacao } = req.body
        
        const novoVenda = vendaRepository.create
        ({total, desconto, observacao})

        await vendaRepository.save(novoVenda)

        return res.status(201).json
        (novoVenda)
    }
}