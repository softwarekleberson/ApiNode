import {NextFunction, Request, Response } from 'express'
import { ApiError } from '../helpers/api-erros';

export const errorMiddleware = (

    error: Error & Partial<ApiError>,
    req: Request,
    res: Response,
    next: NextFunction

    ) => {
    console.log(error)

    const stattusCode = error.statusCode ?? 500
    const mensagem = error.statusCode ? error.message : 'Internal Server Error'
    return res.status(stattusCode).json({mensagem})
}