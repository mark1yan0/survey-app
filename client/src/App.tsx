import React, { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import P5Canvas from './components/P5Canvas';
import router from './routes';

function App() {
  const [show] = useState(true);
  return (
    <div className='min-h-screen w-full bg-primary-main'>
      {/* <button onClick={() => setShow(!show)}>show</button> */}
      <div className='absolute left-0 top-10 z-0'>{show && <P5Canvas />}</div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
