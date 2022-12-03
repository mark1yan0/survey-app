import Form from './components/Form';
import mockQuestions from './lib/mock/mock-questions';

const MOCK_QUESTIONS = mockQuestions;

function App() {
  return (
    <div className='w-full h-screen flex flex-col items-center bg-primary-main pattern-background'>
      <main className=' px-2 lg:max-w-5xl lg:px-0 w-full mt-4'>
        <h1 className='text-xl text-white'>My survey</h1>

        <Form questions={MOCK_QUESTIONS} />
      </main>
    </div>
  );
}

export default App;
