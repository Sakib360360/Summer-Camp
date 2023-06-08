import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useManageUsers = () => {
    const [axiosInstance] = useAxiosSecure()
    const {data:manageAllUsers=[],isLoading:isManageUsersLoading,refetch} = useQuery({
        queryKey:['manageUsers'],
        queryFn:async()=>{
            const response = await axiosInstance.get('/manageUsers')
            return response.data;
        }
    })
    return [manageAllUsers,isManageUsersLoading,refetch]
};

export default useManageUsers;