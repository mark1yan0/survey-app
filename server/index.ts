require('dotenv').config();
import express from 'express';
import cors from 'cors';
import connectDb from './db';

//routes
import { router } from './routes';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get('/healthcheck', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.use('/survey', router);

connectDb().then(async () => {
  console.log('Connected to db');
  app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
});
