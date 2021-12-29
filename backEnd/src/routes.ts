import { Router } from 'express'

import { JobController  } from './controllers/JobsController'
import { UserController } from './controllers/UserController'

const router = Router()

const jobController  = new JobController()
const userController = new UserController()


router.get   ('/jobs',     userController.authenticate, jobController.index )
router.get   ('/jobs/:id', userController.authenticate, jobController.find  )
router.put   ('/jobs/:id', userController.authenticate, jobController.update)
router.post  ('/jobs',     userController.authenticate, jobController.create)
router.delete('/jobs/:id', userController.authenticate, jobController.delete)

router.post('/register', userController.create)
router.post('/login',    userController.login )

export default router
