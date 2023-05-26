import { createBrowserRouter } from 'react-router-dom';
import ROUTES from '../lib/constants/routes';
import NewSurvey from '../containers/NewSurvey';
import NotFound from '../pages/404';
import HomePage from '../pages/Home';
import RootLayout from '../pages/RootLayout';
import SurveyPage from '../pages/Survey';
import PageNotFound from '../pages/404';

const router = createBrowserRouter([
  {
    path: ROUTES.Home,
    element: <RootLayout />,
    children: [
      {
        path: ROUTES.Home,
        element: <HomePage />,
      },
      {
        path: ROUTES.New,
        element: <NewSurvey />,
      },
      {
        path: ROUTES.Survey,
        element: <SurveyPage />,
        errorElement: <PageNotFound />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
