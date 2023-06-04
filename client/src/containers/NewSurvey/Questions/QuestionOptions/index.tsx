import { Control, useFieldArray } from 'react-hook-form';
import Input from '../../../../components/Form/Fields/Input';
import { ISurvey } from '../../../../lib/interfaces/questions';

const QuestionOptions: React.FC<{
  index: number;
  control: Control<ISurvey>;
}> = ({ index, control }) => {
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
            <h2>#{idx + 1}</h2>
            <Input
              name={`questions.${index}.options.${idx}.label`}
              label='Option Label'
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
