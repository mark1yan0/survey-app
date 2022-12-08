import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ISurvey } from '../../lib/interfaces/questions';
import Survey from '../../components/Survey';

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

  return <Survey survey={data} />;
};

export default SurveyPage;
