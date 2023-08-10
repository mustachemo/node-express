import express from 'express';
import Customer from '../models/customers.js';

const userRouter = express.Router();

userRouter
  .route('/')
  .get((req, res) => {
    res.render('users', {
      title: 'User Form',
      message: 'Please enter your name:',
    });
  })
  .post(async (req, res) => {
    try {
      const submittedName = await Customer(req.body.name);
      res.render('users', {
        title: 'User Form',
        message: `Hello, ${submittedName.name}!`,
      });
    } catch (error) {
      res.status(500).send(`Error: could not get user ${req.body.name}`);
    }
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
