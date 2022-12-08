import { Request, Response } from 'express';
import { Survey } from '../models';

// ? returns only ids and title as it's the only data i need for now
export default async (req: Request, res: Response) => {
  try {
    const allSurveys = await Survey.find();

    const mappedSurvey = allSurveys.map(survey => ({
      _id: survey._id,
      name: survey.title,
    }));

    res.status(200).json({ message: 'All Surveys ', surveys: mappedSurvey });
  } catch (err: any) {
    console.log(err);
    res.status(500).json({
      message: 'An error occured',
      data: { error: 'Error details' },
    });
  }
};
