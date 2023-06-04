import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import SubmitButton from '../Buttons/SubmitButton';
import { ISurvey } from '../../lib/interfaces/questions';

export interface IFormKeys {
  [key: string]: string;
}

const Form: React.FC<{
  children: React.ReactNode;
  onSubmit: (values: ISurvey) => void;
  submitText?: string;
}> = ({ children, onSubmit, submitText }) => {
  const methods = useForm<ISurvey>();
  return (
    <FormProvider {...methods}>
      <form className='flex flex-col' onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
        <SubmitButton text={submitText ?? 'Submit'} />
      </form>
    </FormProvider>
  );
};

export default Form;
