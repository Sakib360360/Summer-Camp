import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProviders';
import { Helmet } from 'react-helmet-async';

const AddAClass = () => {
    const { register, handleSubmit } = useForm();
    const [axiosInstance] = useAxiosSecure()
    const {user} = useContext(AuthContext)
    console.log(user)
    const imgKey = import.meta.env.VITE_imgbb_api_key;
    const imgURLHosting = `https://api.imgbb.com/1/upload?key=${imgKey}`
    const onSubmit = (data) => {
        const formData = new FormData()
        formData.append('image', data.image[0])
        fetch(imgURLHosting, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const img_url = imgResponse.data.display_url;
                    data.image = img_url
                    data.price = parseFloat(data.price)
                    const newItem = {
                        className:data.className,
                        seats:data.availableSeats,
                        price:data.price,
                        classImage:data.image,
                        classInstructor:user?.displayName,
                        instructorEmail:user?.email,
                        status:data.status,

                    };
                    axiosInstance.post('/addAClass',newItem)
                    .then(response=>{
                        if(response.data.insertedId){
                            Swal.fire('Added')
                        }
                    })
                    .catch(error=>console.log(error))
                    console.log(newItem)
                }
                
            })
    };
    return (
        // TODO: button disabled when any field is not filled
        <div>
            <Helmet>
                <title>Language-Camp|Add a Class</title>
            </Helmet>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-8">
                <div className="mb-4">
                    <label htmlFor="className" className="block text-gray-700 font-bold mb-2">
                        Class Name
                    </label>
                    <input
                        type="text"
                        id="className"
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter class name"
                        {...register('className', { required: true })}
                    />
                </div>



                <div className="mb-4">
                    <label htmlFor="instructorName" className="block text-gray-700 font-bold mb-2">
                        Instructor Name
                    </label>
                    <input
                        type="text"
                        value={user?.displayName}
                        id="instructorName"
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter instructor name"
                        {...register('instructorName', { required: true })}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="instructorEmail" className="block text-gray-700 font-bold mb-2">
                        Instructor Email
                    </label>
                    <input
                        type="email"
                        value={user?.email}
                        id="instructorEmail"
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter instructor email"
                        {...register('instructorEmail', { required: true })}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="availableSeats" className="block text-gray-700 font-bold mb-2">
                        Available Seats
                    </label>
                    <input
                        type="number"
                        min='0'
                        id="availableSeats"
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter available seats"
                        {...register('availableSeats', { required: true })}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
                        Price
                    </label>
                    <input
                        type="text"
                        id="price"
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter price"
                        {...register('price', { required: true })}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="status" className="block text-gray-700 font-bold mb-2">
                        Status
                    </label>
                    <select
                        id="status"
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        {...register('status', { required: true })}
                    >
                        
                        <option value="pending">Pending</option>

                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
                        Class Image
                    </label>
                    <input type="file" {...register('image', { required: true })} className="file-input file-input-bordered w-full max-w-xs " />

                </div>

                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddAClass;