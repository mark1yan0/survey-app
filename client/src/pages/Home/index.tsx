import { NavLink } from 'react-router-dom';
import SurveyList from '../../containers/SurveyList';
import ROUTES from '../../lib/constants/routes';

const HomePage = () => {
  return (
    <>
      <SurveyList />
      <NavLink
        to={ROUTES.New}
        className='absolute bottom-5 right-5 rounded bg-gradient-to-tr from-accent-yellow to-secondary-main p-2'
      >
        Create new
      </NavLink>
    </>
  );
};

export default HomePage;
