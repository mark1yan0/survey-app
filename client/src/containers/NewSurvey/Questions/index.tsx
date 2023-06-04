import { Control, UseFormRegister, useFieldArray } from 'react-hook-form';
import Input from '../../../components/Form/Fields/Input';
import QuestionOptions from './QuestionOptions';
import Select from '../../../components/Form/Fields/Select';
import { ISurvey } from '../../../lib/interfaces/questions';

const Questions: React.FC<{
  control: Control<ISurvey>;
  register: UseFormRegister<ISurvey>;
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
          className='glass-card mt-2 flex flex-col rounded p-2'
        >
          <div className='mb-2 flex items-center gap-2'>
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
