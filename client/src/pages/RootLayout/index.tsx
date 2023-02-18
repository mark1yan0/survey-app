import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';

const RootLayout = () => {
  return (
    <div className='z-10 w-full flex items-center flex-col'>
      <Header />
      <main className='px-2 lg:max-w-5xl lg:px-0 w-full mt-4 z-10'>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
