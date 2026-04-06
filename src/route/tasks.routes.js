import express from 'express'

const taskRoutes = express.Router()

taskRoutes.get('/');

taskRoutes.get('/:taskId');

taskRoutes.put('/:taskId');

taskRoutes.patch('/:taskId');

taskRoutes.patch('/:taskId/status');

taskRoutes.patch('/:taskId/assign');

taskRoutes.delete('/:taskId');


export default taskRoutes