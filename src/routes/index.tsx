import { createBrowserRouter } from 'react-router-dom'
//screens
import Home from '../screens/Home'
import Login from '../screens/Auth/Login'
import Register from '../screens/Auth/Register/Register'
import Verify from '../screens/Auth/Verify/Verify'

const AllRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/verify',
    element: <Verify />,
  },

  // {
  //   path: '/user',
  //   element: <AdminLayout />,
  //   children: [
  //     {
  //       path: 'dashboard',
  //       element: <Dashboard />,
  //     },
  //     {
  //       path: 'workspace',
  //       element: <Tasks />,
  //     },
  //     {
  //       path: 'assets',
  //       element: <Assets />,
  //     },
  //     {
  //       path: 'tasks',
  //       element: <div></div>,
  //     },
  //     {
  //       path: 'documentation',
  //       element: <div></div>,
  //     },
  //     {
  //       path: 'settings',
  //       element: <div></div>,
  //     },
  //   ],
  // },
])

export default AllRoutes
