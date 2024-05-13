import { Router } from "express";
import { authController } from "../controller/AuthController";

const router = Router()


router.post('/Signup' , authController.signUpHandler)

export const AuthRoutes = router