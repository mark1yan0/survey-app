import { motion } from 'framer-motion';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import ErrorMessage from '../../ErrorMessage';

const Select: React.FC<{
  name: string;
  label: string;
  required?: boolean;
  selectOptions: { label: string; value: string }[];
}> = ({ name, label, required = false, selectOptions }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <motion.div layout className='mt-2 flex flex-col rounded'>
      <label htmlFor='title' className='text-white'>
        {label}
      </label>
      <select
        className='rounded bg-slate-200 p-2'
        id={name}
        {...register(name, { required })}
      >
        {selectOptions.map(opt => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <ErrorMessage errors={errors} fieldName={name} />
    </motion.div>
  );
};

export default Select;
