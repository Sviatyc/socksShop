import { createBrowserRouter } from 'react-router-dom'
import MainPage from '../pages/MainPage/MainPage.jsx'
import AdminPage from '../pages/AdminPage/AdminPage.jsx'
import LoginPage from "../pages/LoginPage/LoginPage.jsx"
import {ProtectRout} from './ProtectRout.jsx'


export const routing = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />
    },
    {
        path: '/admin',
        element: <ProtectRout><AdminPage/></ProtectRout>
    },
    {
        path: '/login',
        element: <LoginPage/>
    },
    
])