import { useFieldArray } from 'react-hook-form';
import Input from '../../../components/Form/Fields/Input';
import QuestionOptions from './QuestionOptions';
import Select from '../../../components/Form/Fields/Select';

const Questions: React.FC<{
  control: any;
  register: any;
}> = ({ control }) => {
  const { fields, append, remove } = useFieldArray({
    name: 'questions',
    control,
  });

  const handleRemove = (idx: number) => remove(idx);

  const handleAppend = () =>
    append({
      fieldName: '',
      title: '',
      type: '',
      options: [
        {
          label: '',
          value: '',
          type: '',
        },
      ],
    });

  return (
    <>
      {fields.map((field, index) => (
        <section
          key={field.id}
          className='glass-card flex flex-col p-2 rounded mt-2'
        >
          <div className='flex gap-2 items-center mb-2'>
            <h2>#{index + 1} </h2>
            <Input
              name={`questions.${index}.title`}
              label='Question Name'
              required
            />
            {fields.length > 1 && (
              <button
                className='add-remove-btn'
                type='button'
                onClick={handleRemove.bind(null, index)}
              >
                Remove question
              </button>
            )}
          </div>
          <Select
            name={`questions.${index}.type`}
            label='Question Type'
            required
            selectOptions={[
              { value: 'one_choise', label: 'One Choise' },
              { value: 'multiple_choise', label: 'Multiple Choise' },
            ]}
          />
          <QuestionOptions index={index} control={control} />
        </section>
      ))}

      <button className='add-remove-btn' type='button' onClick={handleAppend}>
        Add question
      </button>
    </>
  );
};

export default Questions;
