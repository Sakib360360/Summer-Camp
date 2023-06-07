import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    const navItems = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/instructors'>Instructors</NavLink></li>
    <li><NavLink to='/classes'>Classes</NavLink></li>
    <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
    <li><NavLink to='/login'>Login</NavLink></li>
    <li><NavLink to='/register'>Sign Up</NavLink></li>
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
                    {/* {
                        user && <button onClick={handleLogout} className='btn btn-outline text-white'>Logout</button>
                    } */}
                </div>
            </div>
        </div>
    );
};

export default NavBar;