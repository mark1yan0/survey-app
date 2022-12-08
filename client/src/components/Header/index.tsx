import { NavLink } from 'react-router-dom';
import ROUTES from '../../lib/constants/routes';

const Header = () => {
  return (
    <header className='w-full h-10 flex items-center px-2 lg:px-6 bg-black/30 '>
      <NavLink to={ROUTES.Home} className='text-white'>
        Home
      </NavLink>
    </header>
  );
};

export default Header;
