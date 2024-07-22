import { Router } from 'express'
import * as personalController from '../controllers/personal.controlers.js'
import { authToken } from '../middlewares/personal.middleware.js'

const router = Router()

router.get('/personal', personalController.findAll)
router.get('/personal/:id', personalController.findById)
router.post('/personal', personalController.create)
router.put('/personal/:id', personalController.updateById)
router.delete('/personal/:id', authToken, personalController.deleteById)

export default router
