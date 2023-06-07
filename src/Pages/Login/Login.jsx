import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';


const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error,setError] = useState('')
    const onSubmit = data => {
        
        if(data.confirm_password !== data.password){
            setError('Confirm password is incorrect')
        }else{
            console.log(data)
        }
        
    };
    return (
        <>
            <Helmet>
                <title>Language-Camp|sign up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="Name" {...register("name")} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" {...register("email")} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" {...register("password", {
                                    required: true,
                                    maxLength: 14,
                                    minLength: 6,
                                    pattern: /(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/
                                })} className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className='text-red-600' role="alert">You must put password</p>}
                                {errors.password?.type === 'maxLength' && <p className='text-red-600' role="alert">Password must be less than 14 charecters</p>}
                                {errors.password?.type === 'minLength' && <p className='text-red-600' role="alert">Password must be greater than 5 charecters</p>}
                                {errors.password?.type === 'pattern' && <p className='text-red-600' role="alert">Password must have at least a number , a special charecter, a small letter, a capital letter</p>}
                                
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" placeholder="Confirm Password" {...register("confirm_password")} className="input input-bordered" />
                                <p className='text-red-600'>{error}</p>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Phoro URL" {...register("photo_url")} className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Login;