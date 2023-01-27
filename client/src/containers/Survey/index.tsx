import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Form, { IFormKeys } from '../../components/Form';
import sendSurvey from '../../lib/api/sendSurvey';
import { ISurvey, IVotingResult } from '../../lib/interfaces/questions';
import SurveyQuestion from './SurveyQuestion';

const Survey: React.FC<{ survey: ISurvey }> = ({ survey }) => {
  const { surveyId } = useParams<{ surveyId: string }>();
  const [state, setState] = useState(survey);

  if (!surveyId) {
    throw new Error('Survey id is required');
  }

  const onSubmit = async (data: IFormKeys) => {
    const results: IVotingResult[] = Object.keys(data).map(key => {
      return {
        question: key,
        answer: data[key],
      };
    });

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
      <Form onSubmit={onSubmit}>
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
