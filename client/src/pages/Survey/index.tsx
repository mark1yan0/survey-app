import Form from '../../components/Form';
import mockQuestions from '../../lib/mock/mock-questions';
const MOCK_QUESTIONS = mockQuestions;
import { useParams } from 'react-router-dom';

const SurveyPage = () => {
  const { surveyId } = useParams<{ surveyId: string }>();
  return (
    <>
      <h1 className='text-xl text-white'>My survey: {surveyId}</h1>
      <Form questions={MOCK_QUESTIONS} />;
    </>
  );
};

export default SurveyPage;
