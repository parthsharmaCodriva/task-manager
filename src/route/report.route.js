import express from 'express'
import { getPendingTasksPerUser,getTasksGroupedByUser } from '../controller/report.controller.js';

const reportRouter = express.Router()

reportRouter.get('/pending-tasks',getPendingTasksPerUser);

reportRouter.get('/tasks-by-user',getTasksGroupedByUser);

export default reportRouter