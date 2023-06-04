import { motion } from 'framer-motion';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import ErrorMessage from '../../ErrorMessage';

const Input: React.FC<{
  name: string;
  label: string;
  type?: 'text' | 'number';
  required?: boolean;
}> = ({ name, label, type = 'text', required = false }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <motion.div layout className='mt-2 flex flex-col rounded'>
      <label htmlFor='title' className='text-white'>
        {label}
      </label>
      <input
        className='rounded bg-slate-200 p-2'
        type={type}
        id={name}
        {...register(name, { required })}
      />
      <ErrorMessage errors={errors} fieldName={name} />
    </motion.div>
  );
};

export default Input;
