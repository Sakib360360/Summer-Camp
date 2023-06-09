import React, { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../Pages/Providers/AuthProviders';

const useManageUsers = () => {
    const [axiosInstance] = useAxiosSecure()
    const {loading} = useContext(AuthContext)
    const {data:manageAllUsers=[],isLoading:isManageUsersLoading,refetch} = useQuery({
        queryKey:['manageUsers'],
        enabled:!loading,
        queryFn:async()=>{
            const response = await axiosInstance.get('/manageUsers')
            return response.data;
        }
    })
    return [manageAllUsers,isManageUsersLoading,refetch]
};

export default useManageUsers;