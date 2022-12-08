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
  return (
    <div>
      {fields.map((field, idx) => (
        <section key={field.id} className='bg-black/30 p-3 my-1 rounded'>
          <div className='flex gap-2 items-center mb-2'>
            <h2>Option #{idx + 1}</h2>
            <button
              className='bg-white text-black rounded p-1 my-1'
              type='button'
              onClick={() => remove(idx)}
            >
              Remove option
            </button>
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

      <button
        className='bg-white text-black rounded p-3 my-1'
        type='button'
        onClick={() =>
          append({
            fieldName: '',
            title: '',
            type: '',
            options: [],
          })
        }
      >
        Add option
      </button>
    </div>
  );
};

export default QuestionOptions;
