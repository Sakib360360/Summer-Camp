import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Pages/Providers/AuthProviders';
import { FaMoon, FaRegMoon, FaSchool } from 'react-icons/fa';
import useAdmin from '../../Hooks/useAdmin';
import useInstructor from '../../Hooks/useInstructor';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [scroll, setScroll] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [isAdmin,] = useAdmin()
    const [isInstructor,] = useInstructor()
    useEffect(() => {
        const htmlElement = document.querySelector('html');

        if (isDarkMode) {
            htmlElement.classList.add('dark');
            document.querySelector("html").setAttribute("data-theme", "light")
        } else {
            htmlElement.classList.remove('dark');
            document.querySelector("html").setAttribute("data-theme", "dark")
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 0) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    const navItems = <>
        <li className=''><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline" : ""
        } to='/'>Home</NavLink></li>
        <li className=''><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline" : ""
        } to='/instructors'>Instructors</NavLink></li>
        <li className=''><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline" : ""
        } to='/classes'>Classes</NavLink></li>

        {
            user && <li><NavLink className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline" : ""
            } to={isAdmin ? '/dashboard/adminHome' : isInstructor ? '/dashboard/instructorHome' : '/dashboard/studenthome'}>Dashboard</NavLink></li>
        }

    </>
    return (
        <div>
            <div className={`fixed z-10  navbar max-w-7xl  transition duration-300 ${scroll ? 'bg-white text-black' : 'bg-transparent text-white'
                }`}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu bg-slate-600 font-bold menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <div className='flex justify-center items-center'>
                        <FaSchool className='ml-6 mb-4'></FaSchool><Link to='/' className="btn md:block hidden uppercase btn-ghost  text-xl">Language-Camp</Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu font-bold menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        <button className='mr-8 flex items-center justify-center gap-2' onClick={toggleDarkMode}>
                            
                            <input type="checkbox" className="toggle toggle-md" />
                            <FaMoon></FaMoon>
                        </button>
                    }


                    {
                        user ? <p className='mr-2 md:mr-6'><Link onClick={handleSignOut}>Log out</Link></p> : <><p><NavLink to='/login'>Login</NavLink></p>
                        </>
                    }
                    {
                        user?.photoURL && <label className="btn hidden md:block btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user?.photoURL} />
                            </div>
                        </label>
                    }

                </div>

            </div>

        </div>
    );
};

export default NavBar;