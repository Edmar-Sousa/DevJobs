import { Router } from 'express'

import { JobController  }    from './controllers/JobsController'
import { UserController }    from './controllers/UserController'
import { CommentController } from './controllers/CommentController'

const router = Router()

const jobController     = new JobController(),
      userController    = new UserController(),
      commentController = new CommentController()


router.get   ('/jobs',     userController.authenticate, jobController.index )
router.get   ('/jobs/:id', userController.authenticate, jobController.find  )
router.put   ('/jobs/:id', userController.authenticate, jobController.update)
router.post  ('/jobs',     userController.authenticate, jobController.create)
router.delete('/jobs/:id', userController.authenticate, jobController.delete)

router.post  ('/comment',     userController.authenticate, commentController.create)
router.delete('/comment/:id', userController.authenticate, commentController.delete)

router.post('/register', userController.create)
router.post('/login',    userController.login )

export default router
