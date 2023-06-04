import { Control, UseFormRegister, useFieldArray } from 'react-hook-form';
import Input from '../../../components/Form/Fields/Input';
import QuestionOptions from './QuestionOptions';
import Select from '../../../components/Form/Fields/Select';
import { ISurvey } from '../../../lib/interfaces/questions';

const Questions = ({
  control,
}: {
  control: Control<ISurvey>;
  register: UseFormRegister<ISurvey>;
}) => {
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
          <div className='mb-2 flex w-full items-center gap-2'>
            <span className='mt-2 text-xl'>#{index + 1} </span>
            <Input
              name={`questions.${index}.title`}
              placeholder='Question Name'
              required
              className='text-[2rem]'
              containerClass='flex-1'
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
