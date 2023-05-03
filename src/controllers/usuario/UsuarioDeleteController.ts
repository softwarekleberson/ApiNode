import { Request, Response } from "express";
import { usuarioRepository } from "../../repositores/UsuarioRepository";
import { BadRequestError, NotFoundError } from "../../helpers/api-erros";
import bcrypt from 'bcrypt'

export class UsuarioDeleteController {
    
    async delete (req: Request, res: Response){

        const { id } = req.body

        if(!id || isNaN(parseInt(id))){
            throw new BadRequestError('O ID da entrega é inválido')
        }

        const usuarioId = parseInt(id)
        const usuario = await usuarioRepository.findOne({ where: { id: usuarioId }})

        if(!usuario){
            throw new NotFoundError('Entrega não existe')
        }

        await usuarioRepository.remove(usuario)
        return res.status(200).json(usuario)
    }
}