
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import Home from './Component/Home/Home';
import Topics from './Component/Topics/Topics';
import Main from './layout/Main';
import Statistic from './Component/Statistic/Statistic';
import Blog from './Component/Blog/Blog';
import QuizDetails from './Component/QuizDetails/QuizDetails';
import Error from './Component/Error/Error';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      errorElement: <Error></Error>,
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/home/:id',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element: <QuizDetails></QuizDetails>
        },
        {
          path: '/',
          element: <Topics></Topics>
        },
        {
          path: '/Statistic',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: < Statistic ></Statistic >
        },
        {
          path: '/Blog',
          element: <Blog></Blog>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} ></RouterProvider>
    </div>
  );
}

export default App;
