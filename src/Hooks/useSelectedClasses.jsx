import React, { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../Pages/Providers/AuthProviders';

const useSelectedClasses = () => {
    const [axiosInstance] = useAxiosSecure()
    const { user, loading } = useContext(AuthContext)
    const { data: selectedClasses = [], refetch } = useQuery({
        queryKey: ['selectedClasses', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const response = await axiosInstance.get(`/selectedClasses?email=${user?.email}`)
            return response.data;
        }
    })
    return [selectedClasses, refetch]
};

export default useSelectedClasses;