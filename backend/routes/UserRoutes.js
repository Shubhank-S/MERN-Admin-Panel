import express from 'express'
import { ForgotPasswordController, LoginController, RegisterController } from '../controllers/UserControllers.js'

const router = express.Router()

// REGISTER || POST

router.post('/register',RegisterController)

// LOGIN || POST

router.post('/login',LoginController)

// FORGOT PASSWORD || POST

router.post('/forgotpassword',ForgotPasswordController)

export default router;