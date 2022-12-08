import { useFormContext } from 'react-hook-form';
import { IQuestion } from '../../../lib/interfaces/questions';
import { motion, AnimatePresence } from 'framer-motion';
import RadioInput from '../../Form/Fields/Radio';

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
    <motion.div layout className='glass-card p-2 my-2 rounded'>
      <h2 className='text-white'>{title}</h2>
      <p>{type}</p>
      <div className='flex flex-col '>
        {options.map(option => (
          <RadioInput
            key={option.value}
            name={fieldName}
            value={option.value}
            label={option.label}
            type='Radio'
          />
        ))}
      </div>
      <AnimatePresence>
        {errors[fieldName] && (
          <motion.p
            initial={{ height: 0 }}
            animate={{ height: 16 }}
            exit={{ height: 0 }}
            className='text-xs text-red-700 overflow-hidden'
          >
            Field is required
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SurveyQuestion;
