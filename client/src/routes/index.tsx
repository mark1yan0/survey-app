import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/Home';
import SurveyPage from '../pages/Survey';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/survey/:surveyId',
    element: <SurveyPage />,
  },
]);

export default router;
