import { RouterProvider } from 'react-router-dom'
import AllRoutes from './routes'
import './css/main.css'

function App() {
  return <RouterProvider router={AllRoutes} />
}

export default App
