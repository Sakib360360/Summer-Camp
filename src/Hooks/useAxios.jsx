import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "https://server-language-club-summer-camp.vercel.app"
})

const useAxios = () => {

    return [axiosInstance]
}
export default useAxios;

