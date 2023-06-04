import { Control, useFieldArray } from 'react-hook-form';
import Input from '../../../../components/Form/Fields/Input';
import { ISurvey } from '../../../../lib/interfaces/questions';

const QuestionOptions = ({
  index,
  control,
}: {
  index: number;
  control: Control<ISurvey>;
}) => {
  const { fields, append, remove } = useFieldArray({
    name: `questions.${index}.options`,
    control,
  });

  const handleRemove = (idx: number) => remove(idx);

  const handleAppend = () =>
    append({
      label: '',
      value: '',
      type: '',
    });

  return (
    <div>
      {fields.map((field, idx) => (
        <section key={field.id} className='my-1 rounded bg-black/30 p-3'>
          <div className='mb-2 flex items-center gap-2'>
            <span className='mt-2'>#{idx + 1}</span>
            <Input
              name={`questions.${index}.options.${idx}.label`}
              placeholder='Option Label'
              containerClass='flex-1'
              required
            />
            {fields.length > 1 && (
              <button
                className='add-remove-btn'
                type='button'
                onClick={handleRemove.bind(null, idx)}
              >
                Remove option
              </button>
            )}
          </div>
        </section>
      ))}

      <button className='add-remove-btn' type='button' onClick={handleAppend}>
        Add option
      </button>
    </div>
  );
};

export default QuestionOptions;
