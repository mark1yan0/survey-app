import { NavLink } from 'react-router-dom';
import ROUTES from '../../lib/constants/routes';

const Header = () => {
  return (
    <header className='flex h-10 w-full items-center bg-black/30 px-2 lg:px-6 '>
      <NavLink to={ROUTES.Home} className='text-white'>
        Home
      </NavLink>
    </header>
  );
};

export default Header;
