import express from 'express';

const userRouter = express.Router();

userRouter.get('/', (req, res) => {
  res.render('users', { title: 'Hey users', message: 'Hello users!' });
});

userRouter.post('/:id', (req, res) => {
  const userId = req.params.id;
  res.render('users', { title: 'Hey users', message: `Hello user ${userId}!` });
});

export default userRouter;
