import { Request, Response } from 'express'

import knex from './../database/connection'
import { JobTable } from './../types'


const STATUS_OK             = 200,
      STATUS_BAD_REQUEST    = 400,
      STATUS_NOT_FOUND      = 404,
      STATUS_INTERNAL_ERROR = 500

class JobController {
    public index(request : Request, response : Response) {
        return knex.select('*').from('jobs')
            .then((data : JobTable[]) => {
                return response
                    .status(STATUS_OK)
                    .json(data)
            })

            .catch((err : any) => {
                return response
                    .status(STATUS_INTERNAL_ERROR)
                    .json({ message : 'Error of consult database.' })
            })
    } 


    public find(request : Request, response : Response) {
        const jobId = request.params.id

        if (!jobId)
            return response.status(STATUS_BAD_REQUEST).json({ message : 'Job id is required.' })

        return knex.select('*').from('jobs').where({ jobId })
            .then((data : JobTable[]) => {
                return response
                    .status(STATUS_OK)
                    .json(data)
            })

            .catch((err : any) => {
                return response
                    .status(STATUS_INTERNAL_ERROR)
                    .json({ message : 'Error of consult database.' })
            })
    }


    public create(request : Request, response : Response) {
        const { title, time, description, technology, location } = request.body

        if (!title || !time || !description || !technology || !location)
            return response.status(STATUS_BAD_REQUEST).json({ message : 'some fields is invalid.' })

        return knex('jobs').insert({ title, time, description, technology, location })
            .then((data : any) => {
                return response
                    .status(STATUS_OK)
                    .json({ message : 'Register success created' })
            })

            .catch((err : any) => {
                return response
                    .status(STATUS_INTERNAL_ERROR)
                    .json({ message : 'Error in create register' })
            })
    }


    public delete(request : Request, response : Response) {
        const jobId = request.params.id

        if (!jobId)
            return response.status(STATUS_BAD_REQUEST).json({ message : 'Job id is required.' })

        return knex('jobs').where('jobId', jobId).del()
            .then((data : any) => {
                return response
                    .status(STATUS_OK)
                    .json({ message : 'Job delete success.' })
            })

            .catch((err : any) => {
                return response
                    .status(STATUS_INTERNAL_ERROR)
                    .json({ message : 'Job not delete.' })
            })
    }


    public update(request : Request, response : Response) {
        const jobId = request.params.id

        if (!jobId)
            return response.status(STATUS_BAD_REQUEST).json({ message : 'Job id is required.' })


        const { title, time, description, technology, location } = request.body

        if (!title || !time || !description || !technology || !location)
            return response.status(STATUS_BAD_REQUEST).json({ message : 'Some fields is invalid.' })
        

        return knex('jobs').where('jobId', jobId).update({ title, time, description, technology, location })
            .then((data : any) => {
                return response
                    .status(STATUS_OK)
                    .json({ message : 'jobs update success' })
            })

            .catch((data : any) => {
                return response
                    .status(STATUS_INTERNAL_ERROR)
                    .json({ message : 'Job not updated.' })
            })
    }
}

export default JobController
