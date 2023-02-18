import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ISurvey } from '../../lib/interfaces/questions';
import Questions from './Questions';
import createSurvey from '../../lib/api/createSurvey';
import generateSurveyLink from '../../lib/helpers/generateSurveyLink';
import { initialValues } from './config';
import ModalContent from './ModalContent';
import Input from '../../components/Form/Fields/Input';
import Modal from '../../components/Modal';
import Form from '../../components/Form';

/**
 * TODO:
 * - better UI
 * - animations
 */
const NewSurvey = () => {
  const { register, control } = useForm<ISurvey>({
    defaultValues: initialValues,
  });

  // loading
  const [isLoading, setIsLoading] = useState(false);

  // modal
  const [show, setShow] = useState(false);
  const [surveyLink, setSurveyLink] = useState<string>();

  // TODO: see if can be handled better with SWR
  async function submitHandler(values: ISurvey) {
    setIsLoading(true);
    const data = await createSurvey(values);
    setSurveyLink(generateSurveyLink(data.id));
    setIsLoading(false);
    setShow(true);
  }

  // TODO: make own page
  return (
    <section className='mb-4'>
      <h1>New survey</h1>

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

      <Modal show={show} setModal={setShow}>
        <ModalContent uri={surveyLink} />
      </Modal>
    </section>
  );
};

export default NewSurvey;
