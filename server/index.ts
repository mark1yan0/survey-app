require('dotenv').config();
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDb from './db';

//routes
import { router } from './routes';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

app.use('/survey', router);

connectDb().then(async () => {
  console.log('Connected to db');
  app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
});
