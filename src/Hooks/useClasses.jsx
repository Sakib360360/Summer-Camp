import React, { useContext } from 'react';
import { AuthContext } from '../Pages/Providers/AuthProviders';
import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';

const useClasses = () => {
    const {user,loading} = useContext(AuthContext)
    const [axiosInstance] = useAxios()
    const {refetch, data:classes=[]} = useQuery({
        queryKey:['classes'],
        queryFn: async ()=>{
            const response = await axiosInstance('/classes')
            return response.data;
        }
    })
    return [classes,refetch]
};

export default useClasses;