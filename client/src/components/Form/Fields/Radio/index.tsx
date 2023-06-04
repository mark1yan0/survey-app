import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import RadioCircle from './RadioCircle';
import { twMerge } from 'tailwind-merge';
import Strings from '@/lib/constants/strings';
import { IQuestionOptions } from '@/lib/interfaces/questions';

interface IRadioInputProps extends IQuestionOptions {
  name: string;
}

const RadioInput = ({ name, label, value, count }: IRadioInputProps) => {
  const [selected, setSelected] = useState(false);
  const context = useFormContext();
  const { register } = context;

  useEffect(() => {
    setSelected(context.watch(name) === value);
  }, [context.watch(name)]);

  return (
    <label
      htmlFor={value}
      className={twMerge(
        'mt-1 flex cursor-pointer items-center justify-between rounded bg-black/20 p-2 text-white hover:bg-black/30',
        selected &&
          'from-secondary-main/30 to-accent-yellow/30 bg-gradient-to-r'
      )}
    >
      <span className='flex items-center gap-1'>
        <RadioCircle selected={selected} />
        <input
          className='appearance-none'
          type='radio'
          id={value}
          value={value}
          {...register(name, { required: Strings.Field.Required })}
        />
        {label}
      </span>
      <p>{count}</p>
    </label>
  );
};

export default RadioInput;
