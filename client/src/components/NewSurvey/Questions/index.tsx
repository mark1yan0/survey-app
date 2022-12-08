import { useFieldArray } from 'react-hook-form';
import Input from '../../Form/Fields/Input';
import QuestionOptions from './QuestionOptions';

const Questions: React.FC<{
  control: any;
  register: any;
}> = ({ control }) => {
  const { fields, append, remove } = useFieldArray({
    name: 'questions',
    control,
  });

  return (
    <>
      {fields.map((field, index) => (
        <section
          key={field.id}
          className='glass-card flex flex-col p-2 rounded mt-2'
        >
          <div className='flex gap-2 items-center mb-2'>
            <h2>Question #{index + 1}</h2>
            <button
              className='bg-white text-black rounded p-1 my-1'
              type='button'
              onClick={() => remove(index)}
            >
              Remove question
            </button>
          </div>
          {/* TODO: could be automatically calculated from title? */}
          <Input
            name={`questions.${index}.fieldName`}
            label='fieldName'
            required
          />
          <Input name={`questions.${index}.title`} label='Title' required />
          <Input name={`questions.${index}.type`} label='Type' required />
          <QuestionOptions index={index} control={control} />
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
        Add question
      </button>
    </>
  );
};

export default Questions;
