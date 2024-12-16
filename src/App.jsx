import './index.css';
import ErrorPage from './pages/ErrorPage'
import getMovieData from './api/GetAPIData';
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Movie from './pages/Movies'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import AppLayout from './Components/Layout/AppLayout';
import MoveDeatils from './Components/Ui/MoveDeatils';
import getMovieDeatils from './Components/Ui/GetMovieDeatils';
import { contactData } from './pages/Contact';
export default function App() {

  document.title = "Movie Flix"

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
                  path: '/movies',
                  element: <Movie />,
                  loader: getMovieData,
                },
                {
                  path: '/movies/:movieID',
                  element: <MoveDeatils />,
                  loader : getMovieDeatils
                },
                {
                  path: '/contact',
                  element: <Contact />,
                  action : contactData
                }]
    }
  ])

  return <RouterProvider router={router}/>
}


