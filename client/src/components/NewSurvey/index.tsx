import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { ISurvey } from '../../lib/interfaces/questions';
import Form from '../Form';
import Input from '../Form/Fields/Input';
import Questions from './Questions';

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
 * - form validation
 * - better UI
 * - animations
 * - react query
 */
const NewSurvey = () => {
  const [surveyId, setSurveyId] = useState();
  const { register, control } = useForm<ISurvey>({
    defaultValues: initialValues,
  });

  function submitHandler(values: ISurvey) {
    console.log(values);
    // fetch('http://localhost:5000/survey/new', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(values),
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     generateSurveyLink(data.id);
    //     setSurveyId(data.id);
    // });
  }

  return (
    <>
      <h1>New survey</h1>
      {surveyId && (
        <NavLink
          to={`/survey/${surveyId}`}
          className='text-white bg-black/30 p-2'
        >
          Mock survey
        </NavLink>
      )}
      <Form onSubmit={submitHandler} submitText='Create'>
        <div className='glass-card flex flex-col p-2 rounded mt-2'>
          <Input name='title' label='Title' required />
        </div>
        <div className='glass-card flex flex-col p-2 rounded mt-2'>
          <label htmlFor='type' className='text-white'>
            type
          </label>
          <select {...register('type')} id='type'>
            <option value='question'>Question</option>
          </select>
        </div>

        <div className='mt-3'>
          <h1>Questions</h1>

          <Questions control={control} register={register} />
        </div>
      </Form>
    </>
  );
};

export default NewSurvey;
