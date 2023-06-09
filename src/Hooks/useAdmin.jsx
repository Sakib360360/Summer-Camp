import React, { useContext } from 'react';
import { AuthContext } from '../Pages/Providers/AuthProviders';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useAdmin = () => {
    const {user,loading} = useContext(AuthContext)
    const [axiosInstance] = useAxiosSecure()
    const {data:isAdmin,isLoading:isAdminLoading} = useQuery({
        queryKey:['isAdmin',user?.email],
        enabled:!loading,
        queryFn:async ()=>{
            const response = await axiosInstance.get(`/users/admin/${user?.email}`)
            return response.data.isAdmin;
        }
    })
    return [isAdmin,isAdminLoading]
};

export default useAdmin;