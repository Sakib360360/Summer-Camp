import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useSelectedClasses = () => {
    const [axiosInstance] = useAxiosSecure()
    const { data: selectedClasses = [], refetch } = useQuery({
        queryKey: ['selectedClasses'],
        queryFn: async () => {

            const response = await axiosInstance.get('/selectedClasses')
            return response.data;
        }
    })
    return [selectedClasses, refetch]
};

export default useSelectedClasses;