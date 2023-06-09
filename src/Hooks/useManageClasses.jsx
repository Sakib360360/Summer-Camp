import React, { useContext } from 'react';
import { AuthContext } from '../Pages/Providers/AuthProviders';
import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';

const useManageClasses = () => {
    const [axiosInstance] = useAxios()
    const {user,loading} = useContext(AuthContext)
    const {data:allClasses=[],refetch} = useQuery({
        queryKey:['manageClasses'],
        enabled:!loading,
        queryFn:async ()=>{
            const response = await  axiosInstance.get('/allClasses')
            return response.data
            
        }
    })
    return [allClasses,refetch]
};

export default useManageClasses;