import { NextFunction, Request , Response} from "express";
import { authService } from "../services/AuthService";
import { StatusCodes } from "http-status-codes";


 class AuthController {
 
    signUpHandler = async(req:Request , res:Response , next:NextFunction)=>{
        try {
          const {user , token} =  await authService.signUpService(req)
          return res.status(StatusCodes.CREATED).json({
            status:StatusCodes.CREATED , 
            data: {
                user , token
            }
          })
            
        } catch (error) {
            next(error)
        }
    }

}

export const authController = new AuthController()