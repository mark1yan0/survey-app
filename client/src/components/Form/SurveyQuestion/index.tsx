import { useFormContext } from 'react-hook-form';
import { IQuestion } from '../../../lib/interfaces/questions';
import RadioInput from '../Fields/Radio';

const SurveyQuestion: React.FC<IQuestion> = ({ title, fieldName, options }) => {
  const {
    formState: { errors },
  } = useFormContext();
  return (
    <div className='glass-card p-2 my-2 rounded'>
      <h2 className='text-white'>{title}</h2>
      <div className='flex flex-col '>
        {options.map(option => (
          <RadioInput
            key={option.value}
            name={fieldName}
            value={option.value}
            label={option.label}
          />
        ))}
      </div>
      {errors[fieldName] && (
        <p className='text-xs text-red-700'>Field is required</p>
      )}
    </div>
  );
};

export default SurveyQuestion;
