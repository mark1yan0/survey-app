import { IQuestion, IQuestionOptions, ISurvey } from '../interfaces/questions';
import config from '../constants/config';
import apiEndpoints from '../constants/apiEndpoints';

// TODO: put meaningful errors
export default async function createSurvey(values: ISurvey) {
  try {
    const questions = values.questions;

    // TODO: find a better logic
    const finalQuestions: IQuestion[] = questions.map(question => {
      const newOptions: IQuestionOptions[] = question.options.map(option => ({
        label: option.label,
        value: option.label.split(' ').join('_').toLowerCase(),
        type: question.type === 'one_choise' ? 'radio' : 'checkbox', // TODO: should be the input type
      }));

      return {
        options: newOptions,
        fieldName: question.title.split(' ').join('_').toLowerCase(),
        title: question.title,
        type: question.type,
      };
    });

    const res = await fetch(`${config.baseUrl}${apiEndpoints.createNew}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...values,
        questions: finalQuestions,
      }),
    });

    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
  }
}
