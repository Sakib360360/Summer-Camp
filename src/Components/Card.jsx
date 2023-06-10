import React, { useContext, useState } from 'react';
import { AuthContext } from '../Pages/Providers/AuthProviders';
import Swal from 'sweetalert2';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { useNavigate } from 'react-router-dom';

const Card = ({item}) => {
    const {className,seats,classImage,price,classInstructor} = item;
    // const [isAdmin,] = useAdmin()
    // const [isInstructor,] = useInstructor()
    const {user} = useContext(AuthContext)
    const [axiosInstance] = useAxiosSecure()
    const [disabled,setDisabled] = useState(false)
    const navigate = useNavigate()

    
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
                  navigate('/login')
                }
              })
        }
    }
    return (
        <div className={`card border  shadow-2xl w-80 bg-base-100 ${item.seats <1 && 'bg-red-200'}`}>
            <figure><img className="h-56" src={classImage} alt="Not uploaded yet" /></figure>
            <div className="card-body">
                <h2 className="card-title">Language: {className}</h2>
                <p>Instructor: {classInstructor}</p>
                <p>Seats: {seats}</p>
                <p >Price: <span className='text-blue-800'>${price}</span> </p>
                <div className="card-actions justify-end">
                    <button disabled={ item.seats<1 ? true : false} onClick={()=>handleSelect(item)} className="btn btn-outline">Select</button>
                </div>
            </div>
        </div>
    );
};

export default Card;