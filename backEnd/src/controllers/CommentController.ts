import { Request, Response } from 'express'
import knex from './../database/connection'

const STATUS_OK             = 200,
      STATUS_BAD_REQUEST    = 400,
      STATUS_NOT_FOUND      = 404,
      STATUS_INTERNAL_ERROR = 500



export class CommentController {
    public create(request : Request, response : Response) {
        const { jobId, userId, body } = request.body

        if (!jobId || !userId || !body)
            return response.status(STATUS_BAD_REQUEST).json({ msg : 'error request body.' })

        return knex('comments')
            .insert({ jobId, userId, body })
            .then((data : any) => {
                return response.status(STATUS_OK).json({ msg : 'comment created with success.' })
            })
            .catch((err : any) => {
                return response.status(STATUS_BAD_REQUEST).json({ msg : 'error create comment.' })
            })
    }


    public delete(request : Request, response : Response) {
        const commentId = request.params.id

        return knex('comments')
            .where({ commentId })
            .del()
            .then((data : any) => {
                return response.status(STATUS_OK).json({ msg : 'comment deleted with success.' })
            })
            .catch((err : any) => {
                return response.status(STATUS_INTERNAL_ERROR).json({ msg : 'error delete comment.' })
            })
    }
}
