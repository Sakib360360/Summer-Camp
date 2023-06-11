import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';
import useAxios from '../../Hooks/useAxios';
import Swal from 'sweetalert2';


const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { googleSignIn, createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const [axiosInstance] = useAxios()
    const [error, setError] = useState('')
    const [users, setUsers] = useState([])
    useEffect(() => {
        axiosInstance.get('/users')
            .then(response => {
                setUsers(response.data)
            })
    }, [])
    console.log(users)
    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                const existingUser = users.some(user => user.email === loggedUser?.email)
                if (!existingUser) {
                    const savedUser = {
                        name: loggedUser.displayName,
                        email: loggedUser.email,
                        role: "admin",
                        photo_url: loggedUser.photoURL

                    }
                    axiosInstance.post('/users', savedUser)
                        .then(response => {
                            if (response.data.insertedId) {
                                Swal.fire('Added')

                            }
                        })
                }
                console.log(loggedUser)
                console.log('existing ', existingUser)

            })
        navigate('/')
    }
    const onSubmit = data => {

        if (data.confirm_password !== data.password) {
            if (data.confirm_password) {
                setError('Confirm password is incorrect')
            }
        } else {
            const savedUser = {
                name: data.name,
                email: data.email,
                role: "student",
                photo_url: data.photo_url

            }
            createUser(data.email, data.password)

                .then(result => {
                    const loggedUser = result.user;
                    axiosInstance.post('/users', savedUser)
                        .then(response => {
                            if (response.data.insertedId) {
                                Swal.fire('Added')
                            }
                        })
                    updateUserProfile(data.name, data.photo_url)
                        .then(() => {

                        })
                        .catch(error => console.log(error))
                    navigate('/')
                })
                .catch(error => {
                    setError(error.message)
                })

            console.log(savedUser)
        }

    };
    return (
        <>
            <Helmet>
                <title>Language-Camp|sign up</title>
            </Helmet>
            <div className="hero min-h-screen bg-[url('https://wallpapercave.com/wp/wp9764105.jpg')]">
                <div className="hero-content w-full  md:w-3/4 mx-auto mt-20">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-transparent">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Name</span>
                                </label>
                                <input type="text" placeholder="Name" {...register("name", { required: true })} className="input input-bordered bg-transparent placeholder-white shadow-2xl " />
                                {errors.name?.type === 'required' && <p className='text-red-600' role="alert">Name is required</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input type="email" placeholder="email" {...register("email", { required: true })} className="input input-bordered bg-transparent placeholder-white shadow-2xl" />
                                {errors.email?.type === 'required' && <p className='text-red-600' role="alert">Email is required</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <input type="password" placeholder="password" {...register("password", {
                                    required: true,

                                    minLength: 6,
                                    pattern: /(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]/
                                })} className="input input-bordered bg-transparent placeholder-white shadow-2xl" />
                                {errors.password?.type === 'required' && <p className='text-red-600' role="alert">Password is required</p>}


                                {errors.password?.type === 'minLength' && <p className='text-red-600' role="alert">Password must be greater than 6 charecters</p>}
                                {errors.password?.type === 'pattern' && <p className='text-red-600' role="alert">Password must have  a special charecter, a capital letter</p>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Confirm Password</span>
                                </label>
                                <input type="password" placeholder="Confirm Password" {...register("confirm_password")} className="input input-bordered bg-transparent placeholder-white shadow-2xl" />
                                <p className='text-red-600'>{error}</p>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Phoro URL" {...register("photo_url")} className="input input-bordered bg-transparent placeholder-white shadow-2xl" />
                            </div>
                            <div>
                                <p>Already have an account? <Link to='/login' className='text-blue-400'>Login</Link></p>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-outline text-white">Register</button>
                            </div>

                        </form>
                        <div className="card-body mt-[-40px]">
                            <div className="divider">OR</div>
                            <button onClick={handleGoogleLogin} className="btn btn-block btn-outline text-white">Google</button>
                        </div>

                    </div>
                </div>

            </div>
        </>
    );
};

export default Register;