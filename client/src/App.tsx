import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import P5Canvas from './components/P5Canvas';
import router from './routes';

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className='w-full min-h-screen bg-primary-main'>
      {/* <button onClick={() => setShow(!show)}>show</button> */}
      <div className='absolute top-10 left-0 z-0'>{show && <P5Canvas />}</div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
