import { Request, Response } from 'express';
import { Survey } from '../models';

export default async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const survey = await Survey.findById(id);

    if (!survey) {
      res.status(404).json({ message: `Survey by ${id} not found` });
      return;
    }

    res.status(200).json({ message: 'Survey found', data: survey });
    return;
  } catch (err: any) {
    console.log(err);
    res.status(400).json({
      message: 'An error occured',
      data: { error: 'Error details' },
    });
  }
};
