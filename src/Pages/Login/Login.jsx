import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';
import Swal from 'sweetalert2';



const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState('')
    const {googleSignIn,signInUser} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'
    const [showPassword, setShowPassword] = useState(false);
    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleGoogleLogin=()=>{
        googleSignIn()
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser)

        })
    }
    const onSubmit = data => {

        signInUser(data.email,data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            if(loggedUser){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Logged in succesfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  navigate(from, {replace:true})
            }
        })
        .catch(error => {
            setError(error)
        })

    };
    return (
        <>
            <Helmet>
                <title>Language-Camp|Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" {...register("email")} className="input input-bordered" />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                
                                    <input type={showPassword ? 'text' : 'password'}
                                        {...register('password')} placeholder="Password" {...register("password")} className="input input-bordered" />
                                    <button className='absolute right-4 bottom-4' type="button" onClick={handleTogglePassword}>
                                        {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                                    </button>
                                
                                <p className='text-red-600'>{error}</p>
                            </div>
                            <div>
                                <p>Don't have an account? <Link to='/register' className='text-blue-400'>Sign up</Link></p>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className="card-body mt-[-40px]">
                            <div className="divider">OR</div>
                            <button onClick={handleGoogleLogin} className="btn btn-block">Google</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Login;