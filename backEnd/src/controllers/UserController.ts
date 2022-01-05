import { Request, Response } from 'express'
import json_web_token_module    from 'jsonwebtoken'

import knex from './../database/connection'

const STATUS_OK             = 200,
      STATUS_BAD_REQUEST    = 400,
      STATUS_NOT_FOUND      = 404,
      STATUS_INTERNAL_ERROR = 500

const SECRET_KEY = 'abc1234'

export class UserController {
    public login(request : Request, response : Response) {
        const { password, email } = request.body

        if (!password || !email)
            return response.status(STATUS_BAD_REQUEST).json({ msg : 'invalid fields of request' })

        knex.select('*').from('users')
            .where({password, email})
            .then((data : any[]) => {
                
                if (data.length == 0)
                    return response.status(STATUS_BAD_REQUEST).json({ msg : 'User not found' })

                json_web_token_module.sign({ password, email }, SECRET_KEY, { expiresIn : '4h' }, (err, token) => {
                    if (err)
                        return response.status(STATUS_INTERNAL_ERROR).json({ msg : 'Error in generated token' })

                    return response.status(STATUS_OK).json({ ...data[0], token })
                })
                
            })
            .catch((err : any) => {
                console.log(err)
                return response.status(STATUS_INTERNAL_ERROR).json({ msg : 'user not found'})
            })
    }

    public create(request : Request, response : Response) {
        const { userName, password, email } = request.body

        if (!userName || !password || !email)
            return response.status(STATUS_BAD_REQUEST).json({ msg : 'Register fields invalid' })

        return knex('users').insert({ userName, password, email })
            .then((data : any) => {
                return response.status(STATUS_OK).json({ msg : 'User registed with success' })
            })
            .catch((err : any) => {
                return response.status(STATUS_INTERNAL_ERROR).json({ msg : 'Error in register user' })
            })
    }
    

    public authenticate(request : Request, response : Response, next : Function) {
        const jwt_token = request.headers['authorization']

        if (!jwt_token)
            return response.status(STATUS_BAD_REQUEST).json({ msg : 'Request invalid access token' })

        const token = jwt_token.split(' ')[1]

        json_web_token_module.verify(token, SECRET_KEY, (err, data) => {
            if (err)
                return response.status(401).json({ msg : 'Request invalid access token' })

            return next()
        })
    }
}

