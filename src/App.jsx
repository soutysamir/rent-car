

import Home from './Components/Home/Home.jsx'

import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './Components/NotFound/NotFound.jsx'
import AllVehicles from './Components/AllVehicles/AllVehicles.jsx'
import Details from './Components/Details/Details.jsx'


function App() {

const routes=createBrowserRouter([
  {path:'/home',element:<Home/>},
  { path: '/Vehicles', element: <AllVehicles/> },
   { path: "/details/:id", element: <Details/> },
  { path: "*", element: <NotFound /> }
])

  return (
    <>
      
<RouterProvider router={routes}></RouterProvider>

    </>
  )
}

export default App
