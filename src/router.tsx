import { createBrowserRouter } from 'react-router-dom';
import { HomePage, BoardPage, NotFoundPage } from '@/pages';
import { Layout } from '@/components/layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'boards/:id',
        element: <BoardPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
