import { RouterProvider } from 'react-router-dom'
import { routing } from './routes/routes.jsx'
function App() {
  return (
    <>
        <RouterProvider router={routing} />
    </>
  )
}

export default App
