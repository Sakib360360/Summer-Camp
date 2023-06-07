import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';


const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { googleSignIn,createUser,updateUserProfile } = useContext(AuthContext)
    const [error, setError] = useState('')
    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)

            })
    }
    const onSubmit = data => {

        if (data.confirm_password !== data.password) {
            if (data.confirm_password) {
                setError('Confirm password is incorrect')
            }
        } else {
            createUser(data.email,data.password)
            .then(result=>{
                const loggedUser = result.user;
                updateUserProfile(data.name,data.photo_url)
                .then(()=>{
                    const savedUserInfo = {
                        name:data.name,
                        photoURL:data.photo_url,

                    }
                })
                .catch(error=>console.log(error))
            })
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
                                    <span className="label-text">Name</span>
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
                                    
                                    minLength: 6,
                                    pattern: /(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]/
                                })} className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className='text-red-600' role="alert">Password in required</p>}
                               
                                {errors.password?.type === 'minLength' && <p className='text-red-600' role="alert">Password must be greater than 6 charecters</p>}
                                {errors.password?.type === 'pattern' && <p className='text-red-600' role="alert">Password must have  a special charecter, a capital letter</p>}

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
                            <div>
                                <p>Already have an account? <Link to='/login' className='text-blue-400'>Login</Link></p>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
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

export default Register;