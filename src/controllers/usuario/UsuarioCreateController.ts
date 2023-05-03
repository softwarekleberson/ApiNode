import { Request, Response } from "express";
import { usuarioRepository } from "../../repositores/UsuarioRepository";
import { BadRequestError, NotFoundError } from "../../helpers/api-erros";
import bcrypt from 'bcrypt'
import { UsuarioValidator } from "../../validacao/usuario/UsuarioValidator";

export class UsuarioCreateController {
    async create(req: Request, res: Response){
        
        UsuarioValidator.valide(req)
        const { nome, email, senha } = req.body

        const usuarioExistente = await usuarioRepository.findOneBy({email})

        if(usuarioExistente){
            throw new BadRequestError('E-mail já cadastrado')
        }
  
        const hashPassword = await bcrypt.hash(senha, 10)
    
        const novoUsuario = usuarioRepository.create
        ({
            nome, 
            email,
            senha: hashPassword
        })

        await usuarioRepository.save(novoUsuario)

        const { senha: _, ... usuario} = novoUsuario
        return res.status(201).json(usuario)
    }
}