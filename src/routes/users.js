import express from 'express';

const userRouter = express.Router();

userRouter.get('/', (req, res) => {
  res.render('users', { title: 'Hey users', message: 'Hello users!' });
});

userRouter.get('/:name', (req, res) => {
  res.render('users', {
    title: 'Hey',
    message: `Hello there ${req.params.name}!`,
  });
});

export default userRouter;
