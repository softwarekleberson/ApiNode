import { Request, Response } from "express";
import { usuarioRepository } from "../../repositores/UsuarioRepository";
import { BadRequestError, NotFoundError } from "../../helpers/api-erros";
import bcrypt from 'bcrypt'

export class UsuarioUpdateController {
    
    async update(req: Request, res: Response) {
        const { id } = req.body;
        const { nome, email, senha } = req.body;
    
        if (!id || isNaN(parseInt(id))) {
          throw new BadRequestError('O ID do usuário é inválido');
        }
    
        const usuarioId = parseInt(id);
        let usuario = await usuarioRepository.findOne({ where: { id: usuarioId } });
    
        if (!usuario) {
          throw new NotFoundError('Usuário não encontrado');
        }
    
        if (nome) {
          usuario.nome = nome;
        }
    
        if (email) {
          usuario.email = email;
        }
    
        if (senha) {
          const hashPassword = await bcrypt.hash(senha, 10);
          usuario.senha = hashPassword;
        }
    
        usuario = await usuarioRepository.save(usuario);
    
        const { senha: _, ...updatedUsuario } = usuario;
        return res.status(200).json(updatedUsuario);
      }
}