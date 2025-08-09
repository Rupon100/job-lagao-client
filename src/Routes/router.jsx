import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../Components/Layout/MainLayout'
import ErrorPage from '../Pages/ErrorPage'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import Jobs from '../Pages/Jobs'
import CareerAdvice from '../Pages/CareerAdvice'
import PrivateRoute from '../Components/Common/PrivateRoute'
export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <Register></Register>
            },
            {
                path: 'jobs',
                element: <PrivateRoute><Jobs></Jobs> </PrivateRoute>
            },
            {
                path: 'career',
                element: <PrivateRoute><CareerAdvice></CareerAdvice></PrivateRoute>
            }
        ]
    }
])