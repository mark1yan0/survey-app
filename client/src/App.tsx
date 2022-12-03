import React from 'react';
import {
  FieldErrorsImpl,
  FieldValues,
  useForm,
  UseFormRegister,
} from 'react-hook-form';

interface IFormKeys {
  [key: string]: string;
}

interface IQuestionOptions {
  value: string;
  label: string;
}

interface IQuestion {
  fieldName: string;
  title: string;
  options: IQuestionOptions[];
}

const questions: IQuestion[] = [
  {
    fieldName: 'cats_or_dogs',
    title: 'Preferisci cani o gatti?',
    options: [
      { label: 'Cats', value: 'cats' },
      { label: 'Dogs', value: 'dogs' },
    ],
  },
  {
    fieldName: 'windows_or_macos',
    title: 'Preferisci Windwos o macos?',
    options: [
      { label: 'Windwos', value: 'windows' },
      { label: 'MacOs', value: 'macos' },
    ],
  },
  {
    fieldName: 'react_or_vue',
    title: 'Preferisci React o Vue?',
    options: [
      { label: 'React', value: 'react' },
      { label: 'Vue', value: 'vue' },
    ],
  },
];

const defaultValues: IFormKeys = {
  cats_or_dogs: '',
  windows_or_macos: '',
};

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormKeys>({
    defaultValues: defaultValues,
  });

  const onSubmit = (data: IFormKeys) => {
    console.log(data);
  };

  return (
    <div className='App'>
      <h1 className='text-xl text-teal-600'>My survey</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        {questions.map(question => (
          <SurveyQuestion
            key={question.fieldName}
            register={register}
            errors={errors}
            options={question.options}
            fieldName={question.fieldName}
            title={question.title}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

interface ISurveyQuestionProps extends IQuestion {
  register: UseFormRegister<FieldValues>;
  errors: Partial<FieldErrorsImpl<{ [x: string]: string }>>;
}

const SurveyQuestion: React.FC<ISurveyQuestionProps> = ({
  register,
  errors,
  title,
  fieldName,
  options,
}) => {
  return (
    <div className='border rounded my-2 bg-gray-200'>
      <h2>{title}</h2>
      {options.map(option => (
        <RadioInput
          key={option.value}
          name={fieldName}
          value={option.value}
          label={option.label}
          register={register}
        />
      ))}
      {errors[fieldName] && <p className='text-red-400'>Field is required</p>}
    </div>
  );
};

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
