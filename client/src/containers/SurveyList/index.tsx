import { NavLink } from 'react-router-dom';
import useSWR from 'swr';
import getAllSurveys from '../../lib/api/get-all-surveys';

interface IRes {
  message: string;
  surveys: Array<{ _id: string; name: string }>;
}

const SurveyList = () => {
  const { data, error } = useSWR<IRes>('/all', getAllSurveys);

  if (!data) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error occured</p>;
  }

  return (
    <>
      <h1>All surveys</h1>
      <div className='grid grid-cols-3 gap-10 py-3 mb-2'>
        {data.surveys.map(survey => (
          <NavLink
            key={survey._id}
            to={`/survey/${survey._id}`}
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
