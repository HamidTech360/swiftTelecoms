import { createBrowserRouter } from 'react-router-dom'

import AdminLayout from '../layouts/adminLayout'
import Login from '../screens/Auth/Login'
import SignUp from '../screens/Auth/SignUp'
import Dashboard from '../screens/User/dashboard'

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
        element: <h1>hello world</h1>,
      },
      {
        path: 'assets',
        element: <h1>hello world</h1>,
      },
      {
        path: 'tasks',
        element: <h1>hello world</h1>,
      },
      {
        path: 'documentation',
        element: <h1>hello world</h1>,
      },
      {
        path: 'settings',
        element: <h1>hello world</h1>,
      },
    ],
  },
])

export default AllRoutes
