/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';
import nunjucks from 'nunjucks';
import dotenv from 'dotenv';
import userRouter from './routes/users.js';
import indexRouter from './routes/index.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

nunjucks.configure('src/views', {
  autoescape: true,
  express: app,
});
app.set('view engine', 'njk');

app.use(express.json({ limit: '10mb' }));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use('/', indexRouter);
app.use('/users', userRouter);

app.listen(port, () => {
  console.log(`listening on port ${port}!`);
});
