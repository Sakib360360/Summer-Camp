import React, { useContext, useState } from 'react';
import { AuthContext } from '../Pages/Providers/AuthProviders';
import Swal from 'sweetalert2';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { useLocation, useNavigate } from 'react-router-dom';

const Card = ({item}) => {
    const {className,seats,classImage,price,classInstructor} = item;
    // const [isAdmin,] = useAdmin()
    // const [isInstructor,] = useInstructor()
    const {user} = useContext(AuthContext)
    const [axiosInstance] = useAxiosSecure()
    const [disabled,setDisabled] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()
    // console.log(isAdmin,isInstructor)
    // if(isAdmin || isInstructor || item.seats<1){
    //     setDisabled(true)
    // }
    
    const handleSelect =(item)=>{
        if(user?.email){
            const selectedClass = {
                selectedClassId:item._id,
                email:user?.email,
                className,classImage,classInstructor,price,seats
            }
            // posting selected class in the server
            axiosInstance.post('/selectedClasses',selectedClass)
            .then(response=>{
                if(response.data.insertedId){
                    Swal.fire("Selected")
                }
            })
        }else{
            Swal.fire({
                title: 'You need to login.',
                showCancelButton: true,
                confirmButtonText: 'Login',
              }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                  navigate('/login',{state:{from:location}})
                }
              })
        }
    }
    return (
        <div className={`card border rounded-tl-3xl rounded-br-3xl rounded-tr-none rounded-bl-none  shadow-2xl w-72 bg-base-100 ${item.seats <1 && 'bg-red-200'}`}>
            <figure><img className="h-48" src={classImage} alt="Not uploaded yet" /></figure>
            <div className="card-body h-52 space-y-0">
                <h2 className="card-title my-0">Language: {className}</h2>
                <p className='mt-0'>Instructor: {classInstructor}</p>
                <p className='mt-0'>Seats: {seats}</p>
                <p className='mt-0' >Price: <span className='text-blue-800'>${price}</span> </p>
                <div className="card-actions justify-end">
                    <button disabled={ item.seats<1 ? true : false} onClick={()=>handleSelect(item)} className="btn btn-sm btn-block rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none btn-outline">Select</button>
                </div>
            </div>
        </div>
    );
};

export default Card;