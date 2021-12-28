import { Router } from 'express'

import { JobController  } from './controllers/JobsController'
import { UserController } from './controllers/UserController'

const router = Router()

const jobController  = new JobController()
const userController = new UserController()

router.get   ('/jobs',      jobController.index )
router.get   ('/jobs/:id',  jobController.find  )
router.put   ('/jobs/:id',  jobController.update)
router.post  ('/jobs',      jobController.create)
router.delete('/jobs/:id',  jobController.delete)

router.post('/user', userController.login)

export default router
