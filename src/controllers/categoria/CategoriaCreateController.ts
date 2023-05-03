import { Request, Response, response } from "express";
import { categoriaRepository } from "../../repositores/CategoriaRepository";
import { CategoriaValidator } from "../../validacao/categoria/CategoriaValidator";


export class CategoriaCreateController {
    async create(req: Request, res: Response){
        
        CategoriaValidator.valide(req)
        const { nome } = req.body

        const novaCategoria = categoriaRepository.create({nome})

        await categoriaRepository.save(novaCategoria)
        
        return res.status(201).json(novaCategoria)
    }
    
}