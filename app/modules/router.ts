import {Request , Response , NextFunction, Router} from 'express'
import { AuthRoutes } from './auth/router/router'

const router = Router()

router.get('/' , (req:Request , res:Response , next:NextFunction)=>{
    res.end('react native task manager backend address ')
})


router.use('auth', AuthRoutes)
module.exports ={
    AllRoutes : router
}