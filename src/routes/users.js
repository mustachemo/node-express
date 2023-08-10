import express from 'express';
import { mongoDB } from '../config/database.js';

const userRouter = express.Router();

userRouter.route('/').get((req, res) => {
  res.render('users', {
    title: 'Hey users',
    message: 'Hello users!',
  });
});

userRouter
  .route('/:name')
  .get(async (req, res) => {
    try {
      const userId = await mongoDB
        .collection('customer')
        .findOne({ name: req.params.name });
      res.render('users', {
        title: 'Getting user',
        message: `Got User: ${userId.name}!, age: ${userId.age}, cute: ${userId.cute}`,
      });
    } catch (error) {
      res.status(500).send(`Error fetching users: ${req.params.name}`);
    }
  })
  .post((req, res) => {
    const userId = req.params.name;
    res.render('users', {
      title: 'Hey users',
      message: `Hello user ${userId}!`,
    });
  });

export default userRouter;
