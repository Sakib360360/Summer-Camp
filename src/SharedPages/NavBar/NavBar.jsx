import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Pages/Providers/AuthProviders';
import { FaMoon,FaRegMoon } from 'react-icons/fa';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [isDarkMode, setIsDarkMode] = useState(true);
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

    const navItems = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/instructors'>Instructors</NavLink></li>
        <li><NavLink to='/classes'>Classes</NavLink></li>

        {
            user && <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
        }

    </>
    return (
        <div>
            <div className="navbar fixed z-10  text-white bg-[#15151580]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu text-white font-bold menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Language-Club</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu text-white font-bold menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        <button className='mr-8 flex items-center justify-center gap-2' onClick={toggleDarkMode}>
                            <FaRegMoon></FaRegMoon>
                            <input type="checkbox" className="toggle toggle-md" />
                            <FaMoon></FaMoon>
                        </button>
                    }


                    {
                        user ? <p className='mr-6'><Link onClick={handleSignOut}>Sign out</Link></p> : <><p><NavLink to='/login'>Login</NavLink></p>
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