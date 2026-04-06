import app from "./app.js";
import { Config } from "./config/envExport.js";
import { connectDB } from "./dbConfig.js";
import express from 'express'
import {reportRouter} from './route/index.js'



const connectServer = async()=>{
await connectDB()

app.listen(Config.port,()=>{
    console.log(`server has been started on port ${Config.port}`)
})


}


connectServer()