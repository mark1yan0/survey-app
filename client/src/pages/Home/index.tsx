import { NavLink } from 'react-router-dom';
import SurveyList from '../../containers/SurveyList';

const HomePage = () => {
  return (
    <>
      <SurveyList />
      <NavLink
        to='/survey/new'
        className='bg-gradient-to-tr from-accent-yellow to-secondary-main p-2 rounded absolute bottom-5 right-5'
      >
        Create new
      </NavLink>
    </>
  );
};

export default HomePage;
