export class ApiError extends Error {
    public readonly statusCode: number

    constructor(mensagem: string, stattusCode: number){
        super(mensagem)
        this.statusCode = stattusCode
    }
}

export class BadRequestError extends ApiError {
    constructor(mensagem: string){
        super(mensagem, 400)
    }
}

export class UnauthorizedError extends ApiError {
    constructor(mensagem: string){
        super(mensagem, 401)
    }
}

export class NotFoundError extends ApiError {
    constructor(mensagem: string){
        super(mensagem, 404)
    }
}


