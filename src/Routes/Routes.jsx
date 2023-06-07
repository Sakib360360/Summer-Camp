import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main/Main';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Login/Register';
import Classes from '../Pages/Classes/Classes';
import Instructors from '../Pages/Instructors/Instructors';
import PrivateRoute from './PrivateRoute';
import Dashboard from '../Pages/Dashboard/Dashboard';
import StudentHome from '../Pages/Dashboard/StudentHome/StudentHome';
import StudentSelectedClasses from '../Pages/Dashboard/StudentSelectedClasses/StudentSelectedClasses';
import StudentEnrolledClasses from '../Pages/Dashboard/StudentEnrolledClasses/StudentEnrolledClasses';
import Payment from '../Pages/Dashboard/Payment/Payment';

const Routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            },
            {
                path:'classes',
                element:<Classes></Classes>
            },
            {
                path:'instructors',
                element:<Instructors></Instructors>
            }
        ]
    },
    {
        path:'dashboard',
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
            //student routes
            {
                path:'studenthome',
                element:<StudentHome></StudentHome>
            },
            {
                path:'selectedClasses',
                element:<StudentSelectedClasses></StudentSelectedClasses>
            },
            {
                path:'enrolledClasses',
                element:<StudentEnrolledClasses></StudentEnrolledClasses>
            },
            {
                path:'payment',
                element:<Payment></Payment>
            }


            //instructor routes


            // admin routes
        ]
    }
])

export default Routes;