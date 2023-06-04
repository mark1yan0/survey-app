import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import SubmitButton from '../Buttons/SubmitButton';

export interface IFormProps<T> {
  children: React.ReactNode;
  onSubmit: (values: T) => void;
  submitText?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Form = <G extends { [key: string]: any }>({
  children,
  onSubmit,
  submitText,
}: IFormProps<G>) => {
  const methods = useForm<G>();
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
