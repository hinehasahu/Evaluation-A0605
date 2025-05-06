import express from 'express';
import { addUser, getUsers } from '../controller/usersController.js';

export const userRouter = express.Router();

userRouter.get('allUsers', getUsers)

userRouter.post('/add', addUser)

// userRouter.get('/:id')

// userRouter.delete('/:id')