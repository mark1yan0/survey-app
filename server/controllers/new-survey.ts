import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { Survey } from '../models';
import { ISurvey } from '../models/interfaces/Survey';

// TODO: add custom author
export default async (req: Request, res: Response) => {
  const { body } = req;
  const payload = getNewSurveyPayload(body);

  try {
    const newSurvey = new Survey(payload);

    const savedSurvey = await newSurvey.save();
    res
      .status(201)
      .json({ message: 'Survey saved successfully', id: savedSurvey._id });
  } catch (err: any) {
    console.log(err);
    res.status(500).json({
      message: 'An error occured',
      data: { error: 'Error details' },
    });
  }
};

// TODO later the author should be in the body
function getNewSurveyPayload(body: Omit<ISurvey, 'author' | 'author_id'>) {
  const questions = body.questions;
  const newQuestions = questions.map(question => ({
    ...question,
    options: question.options.map(option => ({
      ...option,
      count: 0,
    })),
  }));

  body.questions = newQuestions;
  return {
    author: 'mark',
    author_id: uuidv4(),
    ...body,
  };
}
