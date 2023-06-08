import React, { useContext } from 'react';
import { AuthContext } from '../Pages/Providers/AuthProviders';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useInstructor = () => {
    const {user} = useContext(AuthContext)
    const [axiosInstance] = useAxiosSecure()
    const {data:isInstructor,isLoading:isInstructorLoading} = useQuery({
        queryKey:['isInstructor',user?.email],
        queryFn:async()=>{
            const response = await axiosInstance.get(`/users/instructor/${user?.email}`)
            return response.data.instructor;
        }
    })
    return [isInstructor,isInstructorLoading]
};

export default useInstructor;