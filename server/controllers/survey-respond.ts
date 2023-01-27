import { Request, Response } from 'express';
import { Survey } from '../models';

interface ISentResult {
  question: string;
  answer: string;
}

export default async (req: Request, res: Response) => {
  const { body } = req;
  const { id } = req.params;
  try {
    // TODO: refactor with a transaction
    const survey = await Survey.findById(id);

    if (!survey) {
      res.status(404).json({
        message: 'Survey not found',
      });
      return;
    }

    const sentAnswers: ISentResult[] = body.results;
    sentAnswers.forEach(sent => {
      const question = survey.questions.find(
        question => question.fieldName === sent.question
      );

      if (!question) {
        console.log('Question not found');
        return;
      }

      // this is the option of wich the count should be increased
      const selectedOption = question.options.find(
        option => option.value === sent.answer
      );

      if (!selectedOption) {
        console.log('Option not found');
        return;
      }

      selectedOption.count = selectedOption.count + 1;
    });

    const newSurvey = await Survey.findByIdAndUpdate(id, survey, {
      new: true,
    });

    res.status(200).json({
      messasge: 'Response sent successfully',
      data: newSurvey,
    });
  } catch (err: any) {
    console.log(err);
    res.status(500).json({
      message: 'An error occured',
      data: { error: 'Error details' },
    });
  }
};
