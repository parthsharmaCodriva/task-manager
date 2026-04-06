import app from "./app.js";
import { Config } from "./config/envExport.js";
import { connectDB } from "./dbConfig.js";
import express from 'express'
import reportRouter from "./route/report.route.js";
import taskRoutes from "./route/tasks.routes.js";
import userRoutes from "./route/user.routes.js";

const version = 'v1'

app.use(`/api/${version}/report`,reportRouter)
app.use(`/api/${version}/tasks`,taskRoutes)
app.use(`/api/${version}/users`,userRoutes)

const connectServer = async()=>{
await connectDB()

app.listen(Config.port,()=>{
    console.log(`server has been started on port ${Config.port}`)
})


}


connectServer()