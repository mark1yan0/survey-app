import { motion } from 'framer-motion';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import ErrorMessage from '../../ErrorMessage';
import { twMerge } from 'tailwind-merge';
import { IBaseFormField } from '../../../../lib/interfaces/form';
import Strings from '../../../../lib/constants/strings';
import fieldHasErrors from '../../../../lib/helpers/fieldHasErrors';
import { InputFieldVariants } from '../variants';

const Input: React.FC<IBaseFormField> = ({
  name,
  label,
  type = 'text',
  required = false,
  className,
  placeholder,
  errorStyle,
  variant = 'outlined',
  containerClass,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <motion.div
      layout
      className={twMerge('mt-2 flex flex-col rounded', containerClass)}
    >
      {label && (
        <label htmlFor='title' className='text-white'>
          {label}
        </label>
      )}
      <input
        placeholder={placeholder}
        className={twMerge(
          InputFieldVariants[variant].className,
          className,
          fieldHasErrors(errors, name) &&
            (errorStyle || InputFieldVariants[variant].errorStyle)
        )}
        type={type}
        id={name}
        {...register(name, {
          required: required && Strings.Field.Required,
        })}
      />
      <ErrorMessage errors={errors} fieldName={name} />
    </motion.div>
  );
};

export default Input;
