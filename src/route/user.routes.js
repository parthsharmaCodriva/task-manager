import express from "express"
import { createUser,getAllUsers,getUserById,deleteUser } from "../controller/user.controller.js";

const userRoutes = express.Router()

userRoutes.post('/',createUser);


userRoutes.get('/',getAllUsers);


userRoutes.get('/:id',getUserById);


userRoutes.delete('/:id',deleteUser);

export default userRoutes