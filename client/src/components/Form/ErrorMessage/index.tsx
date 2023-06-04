import React from 'react';
import { FieldErrors } from 'react-hook-form';
import { ErrorMessage as HookFormErrorMessage } from '@hookform/error-message';
import { ISurvey } from '@/lib/interfaces/questions';

const ErrorMessage: React.FC<{
  errors: FieldErrors<ISurvey>;
  fieldName: string;
}> = ({ errors, fieldName }) => {
  return (
    <HookFormErrorMessage
      errors={errors}
      name={fieldName}
      render={({ message }) => (
        <p className='mt-1 rounded border border-red-700 bg-red-200 p-2 text-xs text-red-700'>
          {message}
        </p>
      )}
    />
  );
};

export default ErrorMessage;
