import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { Survey } from '../models';

// TODO: add custom author
export default async (req: Request, res: Response) => {
  const { body } = req;
  try {
    const newSurvey = new Survey({
      author: 'mark',
      author_id: uuidv4(),
      ...body,
    });

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
