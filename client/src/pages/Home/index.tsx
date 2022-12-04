import { NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <button className='glass-card rounded p-2 hover:scale-105 transition-transform'>
        <NavLink to='/survey/mockSurvey' className='text-white'>
          Mock survey
        </NavLink>
      </button>
    </>
  );
};

export default HomePage;
