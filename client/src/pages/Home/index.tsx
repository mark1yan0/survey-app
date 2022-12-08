import { NavLink } from 'react-router-dom';
import NewSurvey from '../../components/NewSurvey';

const MOCK_SURVEY_ID = '638f9625063d626de35a0fa2';

const HomePage = () => {
  return (
    <>
      <button className='glass-card rounded p-2 hover:scale-105 transition-transform'>
        <NavLink to={`/survey/${MOCK_SURVEY_ID}`} className='text-white'>
          Mock survey
        </NavLink>
      </button>

      <NewSurvey />
    </>
  );
};

export default HomePage;
