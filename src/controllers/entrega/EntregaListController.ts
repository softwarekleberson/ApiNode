import { Request, Response } from "express";
import { entregaRepository } from "../../repositores/EntregaRepository";
import { BadRequestError, NotFoundError } from "../../helpers/api-erros";

export class EntregaListController {
    
    async list(req: Request, res: Response){
    
        const entregas = await entregaRepository.find();
        if(entregas.length == 0){
            throw new NotFoundError('Nada Encontrado')
        }

        return res.json(entregas)
    }
}