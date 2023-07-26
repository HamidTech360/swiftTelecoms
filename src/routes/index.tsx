import { createBrowserRouter } from 'react-router-dom'

import AdminLayout from '../layouts/adminLayout'
import Login from '../screens/Auth/Login'
import SignUp from '../screens/Auth/SignUp'
import Dashboard from '../screens/User/dashboard'
import Tasks from '../screens/User/tasks'
import Assets from '../screens/User/assets'

const AllRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/register',
    element: <SignUp />,
  },

  {
    path: '/user',
    element: <AdminLayout />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'workspace',
        element: <Tasks />,
      },
      {
        path: 'assets',
        element: <Assets />,
      },
      {
        path: 'tasks',
        element: <div></div>,
      },
      {
        path: 'documentation',
        element: <div></div>,
      },
      {
        path: 'settings',
        element: <div></div>,
      },
    ],
  },
])

export default AllRoutes
