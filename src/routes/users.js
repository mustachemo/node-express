import express from 'express';
import Customer from '../models/customers.js';

const userRouter = express.Router();

userRouter
  .route('/')
  .get(async (req, res) => {
    const userName = await Customer.find({ name: 'sophia' });
    res.render('users', {
      title: '[GET] Getting user...',
      message: `Hello, ${userName}!`,
    });
  })
  .post(async (req, res) => {
    try {
      // await console.log(`console log req body: ${req.body.name}`);
      const submittedName = await Customer.find({ name: `${req.body.name}` });
      await console.log(submittedName);
      res.render('users', {
        title: '[POST] Getting User...',
        message: `Hello now, ${submittedName[0].name}!`,
      });
    } catch (error) {
      res.status(500).send(`Error: could not get user`);
    }
  });

export default userRouter;
