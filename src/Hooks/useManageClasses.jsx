import React, { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { AuthContext } from '../Pages/Providers/AuthProviders';
import { useQuery } from '@tanstack/react-query';

const useManageClasses = () => {
    const [axiosInstance] = useAxiosSecure()
    const {user,loading} = useContext(AuthContext)
    const {data:allClasses=[],refetch} = useQuery({
        queryKey:['manageClasses'],
        queryFn:async ()=>{
            const response = await  axiosInstance.get('/allClasses')
            return response.data
            
        }
    })
    return [allClasses,refetch]
};

export default useManageClasses;