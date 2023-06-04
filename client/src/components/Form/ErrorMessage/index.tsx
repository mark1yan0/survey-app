import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { FieldErrors } from 'react-hook-form';
import { ISurvey } from '../../../lib/interfaces/questions';

const ErrorMessage: React.FC<{
  errors: FieldErrors<ISurvey>;
  fieldName: string;
}> = ({ errors, fieldName }) => {
  const currError = errors[fieldName as keyof FieldErrors<ISurvey>];
  return (
    <AnimatePresence>
      {currError && (
        <motion.p
          initial={{ height: 0 }}
          animate={{ height: 16 }}
          exit={{ height: 0 }}
          className='mt-1 overflow-hidden text-xs text-red-700'
        >
          {currError.message}
        </motion.p>
      )}
    </AnimatePresence>
  );
};

export default ErrorMessage;
