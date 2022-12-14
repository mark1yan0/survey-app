import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';

const RootLayout = () => {
  return (
    <>
      <Header />
      <main className=' px-2 lg:max-w-5xl lg:px-0 w-full mt-4'>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
