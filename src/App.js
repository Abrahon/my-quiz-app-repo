import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Component/Blog/Blog';
import Home from './Component/Home/Home';
import Statistic from './Component/Statistic/Statistic';
import Main from './Layout/Main';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,

      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: < Home ></Home >
        },
        {
          path: '/statistic',
          element: <Statistic></Statistic>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }

      ]

    },
    {
      path: 'blog',
      element: <Blog></Blog>
    },
    {
      path: '*',
      element: <div className='notfound text-center fs-1 	mt-5'> element not found 404</div>
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
