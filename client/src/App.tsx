import { RouterProvider } from 'react-router-dom';
import router from './routes';

function App() {
  return (
    <div className='w-full min-h-screen flex flex-col items-center bg-primary-main pattern-background'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
