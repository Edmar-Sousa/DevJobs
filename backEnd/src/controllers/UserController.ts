import { Request, Response } from 'express'

import knex from './../database/connection'

const STATUS_OK             = 200,
      STATUS_BAD_REQUEST    = 400,
      STATUS_NOT_FOUND      = 404,
      STATUS_INTERNAL_ERROR = 500

export class UserController {
    public login(request : Request, response : Response) {
        const { password, email } = request.body

        if (!password || !email)
            return response.status(STATUS_BAD_REQUEST).json({ msg : 'invalid fields of request' })

        return knex.select('*').from('users')
            .where({password, email})
            .then((data : any) => {
                return response.status(STATUS_OK).json(data)
            })
            .catch((err : any) => {
                return response.status(STATUS_INTERNAL_ERROR).json({ msg : 'usuario não encontrado'})
            })
    }
}

