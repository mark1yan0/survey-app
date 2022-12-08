import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { IQuestion } from '../../lib/interfaces/questions';
import SubmitButton from '../SubmitButton';
import SurveyQuestion from './SurveyQuestion';

interface IFormKeys {
  [key: string]: string;
}

const Form: React.FC<{ questions: IQuestion[] }> = ({ questions }) => {
  const methods = useForm<IFormKeys>();
  const { handleSubmit } = methods;

  const onSubmit = (data: IFormKeys) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {questions.map(question => (
          <SurveyQuestion
            key={question.fieldName}
            type={question.type}
            options={question.options}
            fieldName={question.fieldName}
            title={question.title}
          />
        ))}
        <SubmitButton text='Submit' />
      </form>
    </FormProvider>
  );
};

export default Form;
