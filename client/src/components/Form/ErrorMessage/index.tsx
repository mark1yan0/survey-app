import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

const ErrorMessage: React.FC<{ errors: any; fieldName: string }> = ({
  errors,
  fieldName,
}) => {
  return (
    <AnimatePresence>
      {errors[fieldName] && (
        <motion.p
          initial={{ height: 0 }}
          animate={{ height: 16 }}
          exit={{ height: 0 }}
          className='text-xs text-red-700 overflow-hidden mt-1'
        >
          Field is required
        </motion.p>
      )}
    </AnimatePresence>
  );
};

export default ErrorMessage;

// TODO: errors not sìshowing for array fields
// function makeErrorsObj(errors: any, fieldName: string) {

// }
