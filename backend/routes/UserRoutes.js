import express from 'express'
import { LoginController, RegisterController } from '../controllers/UserControllers.js'

const router = express.Router()

// REGISTER || POST

router.post('/register',RegisterController)

// LOGIN || POST

router.post('/login',LoginController)

export default router;