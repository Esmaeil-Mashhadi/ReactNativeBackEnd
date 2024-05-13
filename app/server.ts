import { configDotenv } from "dotenv"
import { urlencoded } from "express"
import mongoose from "mongoose"
const {AllRoutes} = require('../app/modules/router')
const express = require("express")
const cors = require('cors')
const app = express()

configDotenv()

export class Application {
    constructor(public PORT:string , private DB_URL:string){
        this.intiConnection()
        this.connectDB()
        this.configApp()
        this.handleRoutes()
    }



    intiConnection = ()=>{
        app.listen(this.PORT , ()=>{
            console.log(`server ran on http://localhost:${this.PORT}`);
        })
    }

    connectDB = ()=>{
        mongoose.connect(this.DB_URL).then(()=>{
            console.log('connected to data base');
        }).catch((err:any)=>{
            console.log(err);
            
        })
        process.on('SIGINT' , ()=>{
            mongoose.connection.close()
            process.exit(1)
        })
    }
    configApp = ()=>{
        app.use(express.json())
        app.use(urlencoded({extended:true}))
        app.use(cors({origin:'*'}))
    }

    handleRoutes = ()=>{
        app.use(AllRoutes)
    }

}