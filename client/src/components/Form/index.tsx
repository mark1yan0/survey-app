import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import SubmitButton from '../SubmitButton';

export interface IFormKeys {
  [key: string]: string;
}

const Form: React.FC<{
  children: React.ReactNode;
  onSubmit: (values: IFormKeys) => void;
}> = ({ children, onSubmit }) => {
  const methods = useForm<IFormKeys>();
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
        <SubmitButton text='Submit' />
      </form>
    </FormProvider>
  );
};

export default Form;
