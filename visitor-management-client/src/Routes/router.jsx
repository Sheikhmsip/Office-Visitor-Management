// eslint-disable-next-line no-unused-vars
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Visitor from '../Pages/Visitor/Visitor';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element:<About></About>
            },
            {
                path:"/visitor",
                element:<Visitor></Visitor>
            }
        ]
    }
])

export default router;