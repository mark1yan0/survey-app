import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { ISurvey } from '../../lib/interfaces/questions';
import Form from '../Form';
import Input from '../Form/Fields/Input';
import Questions from './Questions';
import createSurvey from '../../lib/api/create-survey';
import generateSurveyLink from '../../lib/helpers/generate-survey-link';
import { initialValues } from './config';

/**
 * TODO:
 * - display and can copy generated link
 * - better UI
 * - animations
 */
const NewSurvey = () => {
  const [surveyId, setSurveyId] = useState();
  const { register, control } = useForm<ISurvey>({
    defaultValues: initialValues,
  });

  // loading
  const [isLoading, setIsLoading] = useState(false);

  // TODO: see if can be handled better with SWR
  async function submitHandler(values: ISurvey) {
    setIsLoading(true);
    const data = await createSurvey(values);
    generateSurveyLink(data.id);
    setSurveyId(data.id);
    setIsLoading(false);
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
      <Form
        onSubmit={submitHandler}
        submitText={isLoading ? 'Creando...' : 'Create'}
      >
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
