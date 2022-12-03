import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { IQuestionOptions } from '../../../../lib/interfaces/questions';
import RadioCircle from './RadioCircle';

interface IRadioInputProps extends IQuestionOptions {
  name: string;
}

const RadioInput: React.FC<IRadioInputProps> = ({ name, label, value }) => {
  const [selected, setSelected] = useState(false);
  const context = useFormContext();
  const { register } = context;

  useEffect(() => {
    setSelected(context.watch(name) === value);
  }, [context.watch(name)]);

  return (
    <label
      htmlFor={value}
      className={`cursor-pointer text-white bg-black/20 p-2 rounded mt-1 hover:bg-black/30 flex items-center gap-1 ${
        selected &&
        'bg-gradient-to-r from-secondary-main/30 to-accent-yellow/30'
      }`}
    >
      <RadioCircle selected={selected} />
      <input
        className='appearance-none'
        type='radio'
        id={value}
        value={value}
        {...register(name, { required: true })}
      />
      {label}
    </label>
  );
};

export default RadioInput;
