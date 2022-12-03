import Form from './components/Form';
import mockQuestions from './lib/mock/mock-questions';

const MOCK_QUESTIONS = mockQuestions;

function App() {
  return (
    <div className='App'>
      <h1 className='text-xl text-teal-600'>My survey</h1>

      <Form questions={MOCK_QUESTIONS} />
    </div>
  );
}

export default App;
