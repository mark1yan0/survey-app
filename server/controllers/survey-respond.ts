import { Request, Response } from 'express';
import { Survey } from '../models';

export default async (req: Request, res: Response) => {
  const { body } = req;
  const { id } = req.params;
  try {
    const survey = await Survey.findById(id);

    if (!survey) {
      res.status(404).json({
        message: 'Survey not found',
      });
      return;
    }

    const sentAnswers: { key: string; answer: string }[] = body.results;
    const results = survey.results;
    console.log(results);

    let newAnswers: any[] = [];
    sentAnswers.forEach(item => {
      const found = results.find(result => result.key === item.key);
      if (!found) {
        console.log('not found');
        return;
      }

      // TODO: finish
      newAnswers = [...found.answers, item.answer];
      found.answers = newAnswers;
    });

    // await survey.update({
    //   results:
    // })

    res.status(200).json({
      messasge: 'found',
      data: { newAnswers },
    });

    // const savedSurvey = await newSurvey.save();
    // res
    //   .status(201)
    //   .json({ message: 'Survey saved successfully', id: savedSurvey._id });
  } catch (err: any) {
    console.log(err);
    res.status(500).json({
      message: 'An error occured',
      data: { error: 'Error details' },
    });
  }
};
