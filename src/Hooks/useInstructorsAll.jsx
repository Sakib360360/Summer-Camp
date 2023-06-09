import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';
import { AuthContext } from '../Pages/Providers/AuthProviders';

const useInstructorsAll = () => {
    const { loading } = useContext(AuthContext)
    const [axiosInstance] = useAxios()
    const { data: instructors = [], refetch } = useQuery({
        queryKey: ['instructors'],
        enabled: !loading,
        queryFn: async () => {
            const response = await axiosInstance.get('/instructors')
            return response.data;
        }
    })
    return [instructors, refetch]
};

export default useInstructorsAll;