import React, { useContext } from 'react';
import useInstructor from '../Hooks/useInstructor';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Pages/Providers/AuthProviders';

const InstructorRoutes = ({children}) => {
    const [isInstructor,isInstructorLoading] = useInstructor()
    const location = useLocation()
    const {user,loading} = useContext(AuthContext)

    if(isInstructorLoading || loading){
        return <progress className="progress w-56"></progress>
    }
    if(user && isInstructor){
        return children
    }

    return <Navigate to='/login' state={{from:location}} replace ></Navigate>
};

export default InstructorRoutes;