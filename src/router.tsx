import { createBrowserRouter } from 'react-router-dom';
import { HomePage, BoardPage, NotFoundPage } from '@/pages';
import App from './App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
