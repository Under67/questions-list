import BaseLayout from '@/app/layouts/BaseLayout';
import { QuestionDetails } from '@/pages/QuestionDetails';
import { QuestionsPage } from '@/pages/QuestionPage';

import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: 'questions',
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <QuestionsPage />,
      },
      {
        path: ':id',
        element: <QuestionDetails />,
      },
    ],
  },
]);
