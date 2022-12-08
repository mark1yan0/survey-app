import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import SubmitButton from '../SubmitButton';

export interface IFormKeys {
  [key: string]: string;
}

// TODO: fix submit value types
const Form: React.FC<{
  children: React.ReactNode;
  onSubmit: (values: any) => void;
  submitText?: string;
}> = ({ children, onSubmit, submitText }) => {
  const methods = useForm<any>();
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
