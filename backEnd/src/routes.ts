import { Router } from 'express'

import JobsController from './controllers/JobsController'

const router = Router()


const jobController = new JobsController()

router.get   ('/jobs',      jobController.index )
router.get   ('/jobs/:id',  jobController.find  )
router.put   ('/jobs/:id',  jobController.update)
router.post  ('/jobs',      jobController.create)
router.delete('/jobs/:id',  jobController.delete)

export default router
