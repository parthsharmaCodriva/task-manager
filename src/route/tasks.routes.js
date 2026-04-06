import express from 'express';

import {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  partialUpdateTask,
  updateTaskStatus,
  reassignTask,
  deleteTask
} from '../controller/task.controller.js';

const taskRoutes = express.Router();

taskRoutes.post('/', createTask);


taskRoutes.get('/', getAllTasks);


taskRoutes.get('/:taskId', getTaskById);


taskRoutes.put('/:taskId', updateTask);


taskRoutes.patch('/:taskId', partialUpdateTask);


taskRoutes.patch('/:taskId/status', updateTaskStatus);


taskRoutes.patch('/:taskId/assign', reassignTask);


taskRoutes.delete('/:taskId', deleteTask);

export default taskRoutes;