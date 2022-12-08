import { ISurvey } from '../../lib/interfaces/questions';

export const initialValues: Partial<ISurvey> = {
  title: '',
  type: 'question',
  questions: [
    {
      fieldName: '',
      title: '',
      type: 'radio',
      options: [
        {
          value: '',
          type: 'radio',
          label: '',
        },
      ],
    },
  ],
};
