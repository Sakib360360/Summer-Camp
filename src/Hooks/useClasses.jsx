import React, { useContext } from 'react';
import { AuthContext } from '../Pages/Providers/AuthProviders';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useClasses = () => {
    const {user,loading} = useContext(AuthContext)
    const [axiosInstance] = useAxiosSecure()
    const {refetch, data:classes=[]} = useQuery({
        queryFn:['classes'],
        queryFn: async ()=>{
            const response = await axiosInstance('/classes')
            return response.data;
        }
    })
    return [classes,refetch]
};

export default useClasses;