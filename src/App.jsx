import './index.css';
import ErrorPage from './pages/ErrorPage'
import getMovieData from './api/GetAPIData';
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Movie from './pages/Movie'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import AppLayout from './Components/Layout/AppLayout';
export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout/>,
      errorElement : <ErrorPage /> ,
          children: [{
                  path: '/',
                  element: <Home />
                },
                {
                  path: '/about',
                  element: <About />
                },
                {
                  path: '/movie',
                  element: <Movie />,
                  loader: getMovieData,
                },
                {
                  path: '/contact',
                  element: <Contact />
                }]
    }
  ])

  return <RouterProvider router={router}/>
}


