require('dotenv').config();
import express, { Request, Response } from 'express';
import connectDb from './db';
import { Survey } from './models';

const app = express();
const PORT = process.env.PORT || 5000;

const controller = async (req: Request, res: Response) => {
  const existingSurvey = await Survey.findOne({ author_id: 'uuuid' });

  if (existingSurvey) {
    res
      .status(200)
      .json({ message: 'A survey already exists', survey: existingSurvey });
    return;
  }

  const newSurvey = new Survey({
    author: 'Mark',
    author_id: 'uuuid',
    questions: [
      {
        cats_or_dogs: '',
        windows_or_macos: '',
      },
    ],
  });

  await newSurvey.save();
  res.status(200).json({ message: 'new survey saved', survey: newSurvey });
};

app.get('/', controller);

connectDb().then(async () => {
  console.log('Connected to db');
  app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
});
