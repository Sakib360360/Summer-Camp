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
import InstructorHome from '../Pages/Dashboard/InstructorHome/InstructorHome';
import InstructorRoutes from './instructorRoutes';
import AddAClass from '../Pages/Dashboard/AddAClass/AddAClass';
import MyClasses from '../Pages/Dashboard/MyClasses/MyClasses';
import AdminRoutes from './AdminRoutes';
import AdminHome from '../Pages/Dashboard/AdminHome/AdminHome';
import ManageClasses from '../Pages/Dashboard/ManageClasses/ManageClasses';
import ManageUsers from '../Pages/Dashboard/ManageUsers/ManageUsers';
import StudentPaymentHistory from '../Pages/Dashboard/StudentPaymentHistoy/StudentPaymentHistory';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';

const Routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
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
        errorElement:<ErrorPage></ErrorPage>,
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
            },
            {
                path:'paymentHistory',
                element:<StudentPaymentHistory></StudentPaymentHistory>
            },
            // instructor routes
            {
                path:'instructorHome',
                element:<InstructorRoutes><InstructorHome></InstructorHome></InstructorRoutes>
            },
            {
                path:'addAClass',
                element:<InstructorRoutes><AddAClass></AddAClass></InstructorRoutes>
            },
            {
                path:'myClasses',
                element:<InstructorRoutes><MyClasses></MyClasses></InstructorRoutes>
            },
            // admin routes
            {
                path:'adminHome',
                element:<AdminRoutes><AdminHome></AdminHome></AdminRoutes>
            },
            {
                path:'manageClasses',
                element:<AdminRoutes><ManageClasses></ManageClasses></AdminRoutes>
            },
            {
                path:'manageUsers',
                element:<AdminRoutes><ManageUsers></ManageUsers></AdminRoutes>
            }



            
        ]
    },
    
])

export default Routes;