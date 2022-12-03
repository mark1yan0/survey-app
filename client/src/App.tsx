import { useState } from 'react';
import { useForm } from 'react-hook-form';

function App() {
  const { register, handleSubmit } = useForm();
  // const [selected, setSelected] = useState('');

  // const changeHandler = (event: any) => {
  //   setSelected(event.target.value);
  // };

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className='App'>
      <h1 className='text-xl text-teal-600'>My survey</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='border rounded bg-gray-200'>
          <h2>Cat or Dogs?</h2>
          <div>
            <label htmlFor='cat'>
              <input
                type='radio'
                id='cat'
                // name='cat'
                value='cat'
                {...register('cat')}
                // checked={selected === 'cat'}
                // onChange={changeHandler}
              />
              Cat
            </label>
          </div>

          <div>
            <label htmlFor='dog'>
              <input
                type='radio'
                id='dog'
                // name='dog'
                value='dog'
                {...register('dog')}
                // checked={selected === 'dog'}
                // onChange={changeHandler}
              />
              Dog
            </label>
          </div>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
