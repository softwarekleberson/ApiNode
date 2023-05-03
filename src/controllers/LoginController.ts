import { Request, Response } from 'express';
import { usuarioRepository } from '../repositores/UsuarioRepository';
import { BadRequestError, UnauthorizedError } from '../helpers/api-erros';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'


export class LoginController {
    async login(req: Request, resp: Response){
        
        const {email, senha} = req.body
        const usuario = await usuarioRepository.findOneBy({email})

        if(!usuario){
            throw new BadRequestError('E-mail ou senha inválidos')
        }

        const verificaSenha = await bcrypt.compare(senha, usuario.senha)
        if(!verificaSenha){
            throw new BadRequestError('E-mail ou senha inválidos')
        }

        const token = jwt.sign({ id: usuario.id}, process.env.JWT_PASS ?? '', {
            expiresIn: '8h',
        } )

        const { senha: _, ...loginUsuario } = usuario

        return resp.json({
            usuario: loginUsuario,
            token: token,
        })

    }

    async getProfile(req: Request, res: Response){
        return res.json(req.usuario)
    }
}