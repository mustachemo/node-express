import express from 'express';

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
  res.render('index', {
    title: 'This is the index page',
    message: `Let's see what we can do!`,
  });
});

export default indexRouter;
