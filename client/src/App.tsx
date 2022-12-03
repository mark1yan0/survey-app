import React from 'react';
import { FieldValues, useForm, UseFormRegister } from 'react-hook-form';

interface IFormKeys {
  [key: string]: string;
}

const defaultValues: IFormKeys = {
  cats_or_dogs: '',
  boobs_or_ass: '',
};

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormKeys>({
    defaultValues: defaultValues,
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className='App'>
      <h1 className='text-xl text-teal-600'>My survey</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='border rounded my-2 bg-gray-200'>
          <h2>Cat or Dogs?</h2>
          <RadioInput
            name='cats_or_dogs'
            value='cats'
            label='Cats'
            register={register}
          />
          <RadioInput
            name='cats_or_dogs'
            value='dogs'
            label='Dogs'
            register={register}
          />
          {errors.cats_or_dogs && (
            <p className='text-red-400'>Field is required</p>
          )}
        </div>

        <div className='border rounded my-2 bg-gray-200'>
          <h2>Boobs or Ass?</h2>
          <RadioInput
            name='boobs_or_ass'
            value='ass'
            label='Ass'
            register={register}
          />

          <RadioInput
            name='boobs_or_ass'
            value='boobs'
            label='Boobs'
            register={register}
          />
          {errors.boobs_or_ass && (
            <p className='text-red-400'>Field is required</p>
          )}
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

interface IRadioInput {
  name: string;
  label: string;
  value: string;
  register: UseFormRegister<FieldValues>;
}

// type TRadioField = IRadioInput & ReturnType<UseFormRegister<IRadioInput>>;

const RadioInput: React.FC<IRadioInput> = ({
  name,
  label,
  value,
  register,
}) => {
  return (
    <label htmlFor={value}>
      <input
        type='radio'
        id={value}
        value={value}
        {...register(name, { required: true })}
      />
      {label}
    </label>
  );
};
