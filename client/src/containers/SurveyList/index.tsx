import { NavLink } from 'react-router-dom';
import useSWR from 'swr';
import getAllSurveys from '../../lib/api/getAllSurveys';
import makeRoutePath from '../../lib/helpers/makeRoutePath';
import ROUTES from '../../lib/constants/routes';
import apiEndpoints from '../../lib/constants/apiEndpoints';

interface IRes {
  message: string;
  surveys: Array<{ _id: string; name: string }>;
}

const SurveyList = () => {
  const { data, error } = useSWR<IRes>(apiEndpoints.getAll, getAllSurveys);

  if (error) {
    return <p>An error occured</p>;
  }

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>All surveys</h1>
      <div className='grid grid-cols-3 gap-10 py-3 mb-2'>
        {data.surveys.map(survey => (
          <NavLink
            key={survey._id}
            to={makeRoutePath(ROUTES.Survey, survey._id)}
            className='p-2 bg-slate-100 rounded'
          >
            {survey.name}
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default SurveyList;
