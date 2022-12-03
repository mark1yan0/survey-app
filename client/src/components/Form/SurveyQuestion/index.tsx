import { useFormContext } from 'react-hook-form';
import { IQuestion } from '../../../lib/interfaces/questions';
import RadioInput from '../Fields/Radio';
import { motion, AnimatePresence } from 'framer-motion';

const SurveyQuestion: React.FC<IQuestion> = ({ title, fieldName, options }) => {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <motion.div layout className='glass-card p-2 my-2 rounded'>
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
