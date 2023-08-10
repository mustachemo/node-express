import express from 'express';
import { getUsers, postUsers } from '../controllers/usersController.js';

const userRouter = express.Router();

userRouter.route('/').get(getUsers).post(postUsers);

export default userRouter;
