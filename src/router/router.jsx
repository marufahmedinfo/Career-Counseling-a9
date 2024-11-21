import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/MainLayout/MainLayout';
import Home from '../Layouts/Home';
import ErrorPage from '../components/pages/ErrorPage';
import Services from '../components/pages/Services';
import Details from '../components/pages/Details';
import SignUp from '../components/pages/SignUp';
import Login from '../components/pages/Login';
import PrivetRoutes from '../components/PrivetRoutes/PrivetRoutes';
import Profile from '../components/pages/Profile';
import AboutUs from '../components/AboutUs';


const router = createBrowserRouter ([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children:[
            {
                path: '/',
                element: <Home />,
                loader: ()=> fetch('/AllCards.json')
            },
            {
                path: '/service',
                element: <Services />,
                loader: ()=> fetch('/AllCards.json')
            },
            {
                path: '/aboutus',
                element: <AboutUs />
            },
            {
                path: '/profile',
                element: <PrivetRoutes><Profile /></PrivetRoutes>
            },
            {
                path: '/details/:id',
                element: <PrivetRoutes><Details /></PrivetRoutes>,
                loader: async({params})=>{
                    const res = await fetch('/AllCards.json');
                    const data = await res.json();
                    // console.log(data, params.id)
                    const singleData = data.find(d=> d.id == params.id)
                    return singleData;

                }
            },
            {
                path: "/signup",
                element: <SignUp />
            },
            {
                path: "/login",
                element: <Login />
            }
        ]
    }





])
   


export default router;