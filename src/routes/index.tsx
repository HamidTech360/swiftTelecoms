import { createBrowserRouter } from 'react-router-dom'
//screens
import Home from '../screens/Home'

const AllRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
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
