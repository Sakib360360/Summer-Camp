import React, { useContext } from 'react';
import { AuthContext } from '../Pages/Providers/AuthProviders';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useInstructorsAll = () => {
    const {user} = useContext(AuthContext)
    const [axiosInstance] = useAxiosSecure()
    const {data:instructors=[],refetch} = useQuery({
        queryKey:['instructors'],
        queryFn:async ()=>{
            const response = await axiosInstance.get('/instructors')
            return response.data;
        }
    })
    return [instructors,refetch]
};

export default useInstructorsAll;