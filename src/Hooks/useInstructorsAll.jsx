import React, { useContext } from 'react';
import { AuthContext } from '../Pages/Providers/AuthProviders';
import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';

const useInstructorsAll = () => {
    const {user} = useContext(AuthContext)
    const [axiosInstance] = useAxios()
    const {data:instructors=[],refetch} = useQuery({
        queryKey:['instructors'],
        queryFn:async ()=>{
            const response = await axiosInstance.get('/instructors')
            return response.data;
        }
    })
    return [instructors,refetch]
};

export default useInstructorsAll;