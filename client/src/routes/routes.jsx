import { createBrowserRouter } from 'react-router-dom'
import MainPage from '../pages/MainPage/MainPage.jsx'
import AdminPage from '../pages/AdminPage/AdminPage.jsx'


export const routing = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />
    },
    {
        path: '/login',
        element: <AdminPage />
    }
])