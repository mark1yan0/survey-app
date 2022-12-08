import React, { useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import {
  IQuestion,
  IQuestionOptions,
  ISurvey,
} from '../../lib/interfaces/questions';
import SubmitButton from '../SubmitButton';

const initialValues: Partial<ISurvey> = {
  title: '',
  type: 'question',
  questions: [
    {
      fieldName: '',
      title: '',
      type: 'radio',
      options: [
        {
          value: '',
          type: 'radio',
          label: '',
        },
      ],
    },
  ],
};

function generateSurveyLink(id: string) {
  const origin = location.origin;
  return `${origin}/survey/${id}`;
}

/**
 * TODO:
 * - refactor
 * - display and can copy generated link
 * - better UI
 * - animations
 * - react query
 */
const NewSurvey = () => {
  // const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [surveyId, setSurveyId] = useState();
  const { handleSubmit, register, control } = useForm<ISurvey>({
    defaultValues: initialValues,
  });
  const { fields, append, remove } = useFieldArray({
    name: 'questions',
    control,
  });

  function submitHandler(values: ISurvey) {
    fetch('http://localhost:5000/survey/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then(res => res.json())
      .then(data => {
        generateSurveyLink(data.id);
        setSurveyId(data.id);
      });
  }

  return (
    <>
      <h1>New survey</h1>
      {surveyId && (
        <NavLink to={`/survey/${surveyId}`} className='text-white'>
          Mock survey
        </NavLink>
      )}
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className='glass-card flex flex-col p-2 rounded mt-2'>
          <label htmlFor='title' className='text-white'>
            title
          </label>
          <input
            className='p-2 rounded bg-slate-200'
            type='text'
            id='title'
            {...register('title')}
          />
        </div>
        <div className='glass-card flex flex-col p-2 rounded mt-2'>
          <label htmlFor='type' className='text-white'>
            type
          </label>
          <select {...register('type')} id='type'>
            <option value='question'>Question</option>
          </select>
        </div>

        <div>
          <h1>Questions</h1>

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
              <div className='flex flex-col rounded mt-2'>
                {/* TODO: could be automatically calculated from title? */}
                <label htmlFor='fieldName' className='text-white'>
                  fieldName
                </label>
                <input
                  className='p-2 rounded bg-slate-200'
                  type='text'
                  id='fieldName'
                  {...register(`questions.${index}.fieldName`)}
                />
              </div>
              <div className='flex flex-col rounded mt-2'>
                <label htmlFor='title' className='text-white'>
                  Title
                </label>
                <input
                  className='p-2 rounded bg-slate-200'
                  type='text'
                  id='title'
                  {...register(`questions.${index}.title`)}
                />
              </div>
              <div className='flex flex-col rounded mt-2'>
                <label htmlFor='type' className='text-white'>
                  type
                </label>
                <input
                  className='p-2 rounded bg-slate-200'
                  type='text'
                  id='type'
                  {...register(`questions.${index}.type`)}
                />
              </div>
              <QuestionOptions
                index={index}
                control={control}
                register={register}
              />
            </section>
          ))}
        </div>

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

        <br />
        <SubmitButton text='Crea' />
      </form>
    </>
  );
};

export default NewSurvey;

const QuestionOptions: React.FC<{
  index: number;
  control: any;
  register: any;
}> = ({ index, control, register }) => {
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
          <div className='flex flex-col rounded mt-2'>
            <label htmlFor='label' className='text-white'>
              Label
            </label>
            <input
              className='p-2 rounded bg-slate-200'
              type='text'
              id='label'
              {...register(`questions.${index}.options.${idx}.label`)}
            />
          </div>
          {/* TODO: value should be the label? */}
          <div className='flex flex-col rounded mt-2'>
            <label htmlFor='value' className='text-white'>
              Value
            </label>
            <input
              className='p-2 rounded bg-slate-200'
              type='text'
              id='value'
              {...register(`questions.${index}.options.${idx}.value`)}
            />
          </div>
          <div className='flex flex-col rounded mt-2'>
            <label htmlFor='type' className='text-white'>
              Type
            </label>
            <input
              className='p-2 rounded bg-slate-200'
              type='text'
              id='type'
              {...register(`questions.${index}.options.${idx}.type`)}
            />
          </div>
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
        Add options
      </button>
    </div>
  );
};
