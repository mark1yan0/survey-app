import { useParams } from 'react-router-dom';
import { ISurvey } from '../../lib/interfaces/questions';
import useSWR from 'swr';
import getSurveyById from '../../lib/api/get-survey-by-id';
import Survey from '../../containers/Survey';

const SurveyPage = () => {
  const { surveyId } = useParams<{ surveyId: string }>();
  // TODO: improve error handling and not found cases
  const { data, error } = useSWR<{ data: ISurvey }>(surveyId, getSurveyById);

  if (!data) {
    return <h1 className='text-white'>Loading...</h1>;
  }

  if (error) {
    return <h1 className='text-white'>An error occured</h1>;
  }

  return <Survey survey={data.data} />;
};

export default SurveyPage;
