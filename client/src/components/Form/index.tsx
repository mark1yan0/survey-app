import React from 'react';
import { useForm } from 'react-hook-form';
import { IQuestion } from '../../lib/interfaces/questions';
import SurveyQuestion from './SurveyQuestion';

interface IFormKeys {
  [key: string]: string;
}

const Form: React.FC<{ questions: IQuestion[] }> = ({ questions }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormKeys>();

  const onSubmit = (data: IFormKeys) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {questions.map(question => (
        <SurveyQuestion
          key={question.fieldName}
          register={register}
          errors={errors}
          options={question.options}
          fieldName={question.fieldName}
          title={question.title}
        />
      ))}
      <button>Submit</button>
    </form>
  );
};

export default Form;
