import { Request, Response } from "express";
import { usuarioRepository } from "../../repositores/UsuarioRepository";
import { BadRequestError, NotFoundError } from "../../helpers/api-erros";
import bcrypt from 'bcrypt'

export class UsuarioListController {
    
    async list (req:Request, resp:Response){
  
        const usuarios = await usuarioRepository.find();
        if(usuarios.length == 0){
            throw new NotFoundError('Nada Encontrado')
        }
        return resp.json(usuarios)
    }
}