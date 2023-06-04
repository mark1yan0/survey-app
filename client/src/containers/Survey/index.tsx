import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Form from '@/components/Form';
import sendSurvey from '@/lib/api/sendSurvey';
import { ISurvey, IVotingResult } from '@/lib/interfaces/questions';
import SurveyQuestion from './SurveyQuestion';

const Survey = ({ survey }: { survey: ISurvey }) => {
  const { surveyId } = useParams<{ surveyId: string }>();
  const [state, setState] = useState(survey);

  if (!surveyId) {
    throw new Error('Survey id is required');
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: ISurvey) => {
    const results: IVotingResult[] = Object.entries(data).map(
      ([key, value]) => {
        return {
          question: key,
          answer: value,
        };
      }
    );

    try {
      const updatedSurvey = await sendSurvey({ results }, surveyId);

      setState(updatedSurvey.data);
    } catch (err) {
      if (err instanceof Error) {
        console.log('Error occured while submitting: ', err);
      }
    }
  };

  return (
    <>
      <h1 className='text-xl text-white'>{survey.title}</h1>
      <p className='text-white'>Author: {survey.author}</p>
      <Form<ISurvey> onSubmit={onSubmit}>
        {state?.questions?.map(question => (
          <SurveyQuestion
            key={question.fieldName}
            type={question.type}
            options={question.options}
            fieldName={question.fieldName}
            title={question.title}
          />
        ))}
      </Form>
    </>
  );
};

export default Survey;
