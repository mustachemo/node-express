import express from 'express';
import { getUsers, postUsers } from '../controllers/getUsersController.js';

const getUserRouter = express.Router();

getUserRouter.route('/').get(getUsers).post(postUsers);

export default getUserRouter;
