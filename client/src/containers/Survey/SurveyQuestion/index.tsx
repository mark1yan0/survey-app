import { useFormContext } from 'react-hook-form';
import { IQuestion } from '../../../lib/interfaces/questions';
import { motion } from 'framer-motion';
import RadioInput from '../../../components/Form/Fields/Radio';
import ErrorMessage from '../../../components/Form/ErrorMessage';

// TODO: options should have types
const SurveyQuestion: React.FC<IQuestion> = ({
  title,
  fieldName,
  options,
  type,
}) => {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <motion.div layout className='glass-card my-2 rounded p-2'>
      <h2 className='text-white'>{title}</h2>
      <p>{type}</p>
      <div className='flex flex-col '>
        {options.map(option => (
          <RadioInput
            key={option.value}
            name={fieldName}
            value={option.value}
            label={option.label}
            count={option.count} // TODO: need to see only if voted + better way to see it
            type='Radio'
          />
        ))}
      </div>
      <ErrorMessage errors={errors} fieldName={fieldName} />
    </motion.div>
  );
};

export default SurveyQuestion;
