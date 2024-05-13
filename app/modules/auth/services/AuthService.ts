import { NextFunction, Request , Response } from "express";
import { formValidation } from "../validation/formValidation";
import userModel from "../../user/model/userModel";
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

 class AuthService {
    signUpService =  async(req:Request)=>{
        const {email , password} = await formValidation.validateAsync(req.body)
        const hashedPassword = bcrypt.hashSync(password , 10)
        const token = jwt.sign({payload:email}, process.env.JWT_SECRET, {expiresIn:'30d'})
        const user = await userModel.create({
            email , password : hashedPassword
        })
        return {user , token}
    }
}

export const authService = new AuthService()