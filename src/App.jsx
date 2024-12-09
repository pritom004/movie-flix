import './index.css';
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Movie from './pages/Movie'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import AppLayout from './Components/Layout/AppLayout';
export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout/>,
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
        element: <Movie />
      },
      {
        path: '/contact',
        element: <Contact />
      }]
    }
  ])

  return <RouterProvider router={router}/>
}
