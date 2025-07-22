
import './App.css'
import Home from './components/home'
import "@fortawesome/fontawesome-free/css/all.css"
import About from './pages/about'
import Portfolio from './pages/portfolio'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import NotFound from './notFound/NotFound'
import Layout from './layouts/Layout'
import Content from './pages/Content'

function App() {

  const router = createBrowserRouter([
    {path : "", element :<Layout />, children:[
      {path : "", element : <Home />},
      {path : "home", element : <Navigate to ={'/'} />},
      {path : "about", element : <About />},
      {path : "Portfolio", element : <Portfolio />},
      {path : "content", element : <Content />},
      {path : "*", element : <NotFound /> }
    ],}
  ])
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
