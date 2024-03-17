import express from 'express'
import { UserController } from '../controllers/UserControllers.js'

const router = express.Router()

router.get('/',UserController)

export default router;