/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';
import nunjucks from 'nunjucks';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
// import mongoose from 'mongoose';
import userRouter from './routes/users.js';
import indexRouter from './routes/index.js';
import { mongoDB, testDB } from './config/database.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

(async () => {
  try {
    await testDB(); // Connect to MongoDB using the exported run function
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
})();

(async () => {
  try {
    const sophia = await mongoDB
      .collection('customer')
      .findOne({ name: 'john' });
    console.log(sophia);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
})();

// (async () => {
//   try {
//     await mongoDB.collection('customer').insertOne({
//       name: 'yo Doe',
//     });
//     console.log(
//       'Inserted a document into the learning-db.customer collection.'
//     );
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//   }
// })();

// console.log(
//   'hello: ' + (await mongoDB.collection('customer').find({}).toArray())
// );

nunjucks.configure('src/views', {
  autoescape: true,
  express: app,
});
app.set('view engine', 'njk');

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(cookieParser());
app.use(logger('dev'));
app.use(cors());

app.use('/', indexRouter);
app.use('/users', userRouter);

app.listen(port, () => {
  console.log(`listening on port ${port}!`);
});
