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
    <motion.div layout className='flex flex-col rounded mt-2'>
      <label htmlFor='title' className='text-white'>
        {label}
      </label>
      <select
        className='p-2 rounded bg-slate-200'
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
