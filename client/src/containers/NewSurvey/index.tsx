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
import Select from '../../components/Form/Fields/Select';

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

  // TODO: should be a mutation
  async function submitHandler(values: ISurvey) {
    setIsLoading(true);
    try {
      const data = await createSurvey(values);
      setSurveyLink(generateSurveyLink(data.id));
      setShow(true);
    } catch (error) {
      // TODO: manage errors with error boundary
      console.log(error);
    } finally {
      setIsLoading(false);
    }
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
          <Input name='title' label='Survey Name' required />
        </div>
        <div className='glass-card flex flex-col p-2 rounded mt-2'>
          <Select
            name='type'
            label='Question Type'
            selectOptions={[{ value: 'question', label: 'Question' }]}
          />
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
