import { createBrowserRouter } from 'react-router-dom';
import NewSurvey from '../containers/NewSurvey';
import NotFound from '../pages/404';
import HomePage from '../pages/Home';
import RootLayout from '../pages/RootLayout';
import SurveyPage from '../pages/Survey';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: 'survey/new',
        element: <NewSurvey />,
      },
      {
        path: '/survey/:surveyId',
        element: <SurveyPage />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
