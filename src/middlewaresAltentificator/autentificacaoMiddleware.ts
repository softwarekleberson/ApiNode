import { NextFunction, Request, Response } from "express";
import { UnauthorizedError } from "../helpers/api-erros";
import { usuarioRepository } from "../repositores/UsuarioRepository";
import jwt from 'jsonwebtoken'


type JwtPayload = {
    id: number
}

export const autentificacaoMiddleware = async (req: Request, res: Response, next: NextFunction) => {

    const {authorization} = req.headers

        if(!authorization){
            throw new UnauthorizedError('Não autorizado')
        }

        const token = authorization.split(' ')[1]
        const { id } = jwt.verify(token, process.env.JWT_PASS ?? '') as JwtPayload

        const usuario = await usuarioRepository.findOneBy({ id })
        if(!usuario){
            throw new UnauthorizedError('Não autorizado')           
        }

        const { senha: _, ... loggedUser } = usuario

        req.usuario = loggedUser

        next()

}