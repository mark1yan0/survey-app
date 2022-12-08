import { useFieldArray } from 'react-hook-form';
import Input from '../../../Form/Fields/Input';

const QuestionOptions: React.FC<{
  index: number;
  control: any;
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
        <section key={field.id} className='bg-black/30 p-3 my-1 rounded'>
          <div className='flex gap-2 items-center mb-2'>
            <h2>Option #{idx + 1}</h2>
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
          <Input
            name={`questions.${index}.options.${idx}.label`}
            label='Label'
            required
          />
          {/* TODO: value should be the label? */}
          <Input
            name={`questions.${index}.options.${idx}.value`}
            label='Value'
            required
          />
          <Input
            name={`questions.${index}.options.${idx}.type`}
            label='Type'
            required
          />
        </section>
      ))}

      <button className='add-remove-btn' type='button' onClick={handleAppend}>
        Add option
      </button>
    </div>
  );
};

export default QuestionOptions;
