import express from "express"

const userRoutes = express.Router()

userRoutes.post('/');


userRoutes.get('/');


userRoutes.get('/:id');


userRoutes.delete('/:id');

export default userRoutes