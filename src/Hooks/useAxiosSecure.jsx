import { useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Pages/Providers/AuthProviders';


const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000',
});

const useAxiosSecure = () => {
  const { logOut } = useContext(AuthContext)
  const navigate = useNavigate()


  useEffect(() => {


    axiosInstance.interceptors.request.use((config) => {
      const token = localStorage.getItem('access-token');
      // console.log(token)
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        const { response } = error;
        if (response && (response.status === 401 || response.status === 403)) {
          // Call the logout method from your auth context asynchronously
          console.log(error)
          await logOut();
          navigate('/login')
        }
        return Promise.reject(error);
      }
    );


  }, [logOut, navigate, axiosInstance]);

  return [axiosInstance];
};

export default useAxiosSecure;
