import { RouterProvider } from 'react-router-dom';
import router from './routes';

function App() {
  return (
    <div className='w-full h-screen flex flex-col items-center bg-primary-main pattern-background'>
      <main className=' px-2 lg:max-w-5xl lg:px-0 w-full mt-4'>
        <RouterProvider router={router} />
      </main>
    </div>
  );
}

export default App;
