import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';

const RootLayout = () => {
  return (
    <div className='z-10 flex w-full flex-col items-center'>
      <Header />
      <main className='z-10 mt-4 w-full px-2 lg:max-w-5xl lg:px-0'>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
