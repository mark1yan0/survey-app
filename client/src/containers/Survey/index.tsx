import React from 'react';
import Form, { IFormKeys } from '../../components/Form';
import { ISurvey } from '../../lib/interfaces/questions';
import SurveyQuestion from './SurveyQuestion';

const Survey: React.FC<{ survey: ISurvey }> = ({ survey }) => {
  const onSubmit = (data: IFormKeys) => {
    console.log(data);
  };

  return (
    <>
      <h1 className='text-xl text-white'>{survey.title}</h1>
      <p className='text-white'>Author: {survey.author}</p>
      <Form onSubmit={onSubmit}>
        {survey?.questions?.map(question => (
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
