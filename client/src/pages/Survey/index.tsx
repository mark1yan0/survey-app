import Form from '../../components/Form';
import mockQuestions from '../../lib/mock/mock-questions';
const MOCK_QUESTIONS = mockQuestions;
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IQuestion, ISurvey } from '../../lib/interfaces/questions';

const SurveyPage = () => {
  const { surveyId } = useParams<{ surveyId: string }>();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<ISurvey>();
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/survey/${surveyId}`)
      .then(res => res.json())
      .then(data => {
        setData(data.data);
      })
      .catch(err => {
        console.error(err);
        setIsError(true);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <h1 className='text-white'>Loading...</h1>;
  }

  if (!data || isError) {
    return <h1 className='text-white'>An error occured</h1>;
  }

  console.log(data);
  return (
    <>
      <h1 className='text-xl text-white'>
        {data.title}: {surveyId}
      </h1>
      <p className='text-white'>Author: {data.author}</p>
      <Form questions={data.questions} />
    </>
  );
};

export default SurveyPage;
