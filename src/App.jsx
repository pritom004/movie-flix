import './index.css';
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Movie from './pages/Movie'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
export default function App() {

  const router = createBrowserRouter([
    {
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
    }
  ])

  return <RouterProvider router={router}/>
}
