import express from 'express';
import { getAddUser, postAddUser } from '../controllers/addUserController.js';

const addUserRouter = express.Router();

addUserRouter.route('/').get(getAddUser).post(postAddUser);

export default addUserRouter;
