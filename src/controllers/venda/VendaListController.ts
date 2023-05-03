import { Request, Response } from "express";
import { vendaRepository } from "../../repositores/VendaRepository";
import { BadRequestError, NotFoundError } from "../../helpers/api-erros";

export class VendaListController {
    
    async list(req:Request, resp:Response){
        
        const vendas = await vendaRepository.find();
        if(vendas.length == 0){
            throw new NotFoundError('Nada encontrado')
        }
        return resp.json(vendas)
    }
}