import { FieldValues, UseFormRegister } from 'react-hook-form';
import { IQuestionOptions } from '../../../../lib/interfaces/questions';

interface IRadioInputProps extends IQuestionOptions {
  name: string;
  register: UseFormRegister<FieldValues>;
}

const RadioInput: React.FC<IRadioInputProps> = ({
  name,
  label,
  value,
  register,
}) => {
  return (
    <label htmlFor={value}>
      <input
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
