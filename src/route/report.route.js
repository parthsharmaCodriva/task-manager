import express from 'express'

const reportRouter = express.Router()

reportRouter.get('/pending-tasks');

reportRouter.get('/tasks-by-user');

export default reportRouter