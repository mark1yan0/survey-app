import { UseFormRegister, FieldValues, FieldErrorsImpl } from 'react-hook-form';
import { IQuestion } from '../../../lib/interfaces/questions';
import RadioInput from '../Fields/Radio';

interface ISurveyQuestionProps extends IQuestion {
  register: UseFormRegister<FieldValues>;
  errors: Partial<FieldErrorsImpl<{ [x: string]: string }>>;
}

const SurveyQuestion: React.FC<ISurveyQuestionProps> = ({
  register,
  errors,
  title,
  fieldName,
  options,
}) => {
  return (
    <div className='border rounded my-2 bg-gray-200'>
      <h2>{title}</h2>
      {options.map(option => (
        <RadioInput
          key={option.value}
          name={fieldName}
          value={option.value}
          label={option.label}
          register={register}
        />
      ))}
      {errors[fieldName] && <p className='text-red-400'>Field is required</p>}
    </div>
  );
};

export default SurveyQuestion;
