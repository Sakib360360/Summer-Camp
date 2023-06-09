import React, { useContext } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';
import useInstructor from '../../Hooks/useInstructor';
import useAdmin from '../../Hooks/useAdmin';
import Footer from '../../SharedPages/Footer/Footer';
import NavBar from '../../SharedPages/NavBar/NavBar';

const Dashboard = () => {
    const { user } = useContext(AuthContext)
    const [isInstructor, isInstructorLoading] = useInstructor()
    const [isAdmin, isAdminLoading] = useAdmin()
    // console.log('isAdmin',isAdmin)
    const navItems = <>

        {
            isInstructor && <>
                <li><NavLink to='/dashboard/instructorHome'>Instructor Home</NavLink></li>
                <li><NavLink to='/dashboard/addAClass'>Add a Class</NavLink></li>
                <li><NavLink to='/dashboard/myClasses'>My Classes</NavLink></li>
            </>
        }
        {
            isAdmin && <>
                <li><NavLink to='/dashboard/adminHome'>Admin Home</NavLink></li>
                <li><NavLink to='/dashboard/manageClasses'>Manage Classes</NavLink></li>
                <li><NavLink to='/dashboard/manageUsers'>Manage Users</NavLink></li>
            </>
        }
        {
            !isAdmin && !isInstructor ? <>
                <li><NavLink to='/dashboard/studenthome'>Home</NavLink></li>
                <li><NavLink to='/dashboard/selectedClasses'>My Selected Classes</NavLink></li>
                <li><NavLink to='/dashboard/enrolledClasses'>My Enrolled Classes</NavLink></li>
                <li><NavLink to='/dashboard/paymentHistory'>My Pyament History</NavLink></li>
            </> : null
        }



    </>
    return (




        <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center relative justify-center">
                    {/* Page content here */}
                    <div className='w-full absolute top-0 left-0'>
                    <NavBar></NavBar>
                    </div>
                    <div className='min-h-screen mt-24'>
                    <Outlet></Outlet>
                    </div>
                    <div className='w-full absolute bottom-0 left-0'>
                    <Footer></Footer>
                    </div>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-slate-500 text-black">
                        {/* Sidebar content here */}
                        {navItems}
                    </ul>

                </div>
            </div>
    );
};

export default Dashboard;











// {



//     <div className="drawer">


//             <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
//             <div className="drawer-content flex flex-col">
//                 {/* Navbar */}
//                 <div className="w-full navbar bg-base-300 ">
//                     <div className="flex-none lg:hidden">
//                         <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
//                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
//                         </label>
//                     </div>
//                     <div className="flex-1 px-2 mx-2"><Link to='/'>Language-Camp</Link></div>
//                     <div className="flex-none hidden lg:block">
//                         <ul className="menu menu-horizontal">
//                             {/* Navbar menu content here */}
                            
//                         </ul>
//                     </div>
//                     <div>
//                         {user?.displayName}
//                     </div>
//                 </div>
//                 {/* Page content here */}

//             </div>
//             <div className="drawer-side">
//                 <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
//                 <ul className="menu p-4 w-80 h-full bg-base-200">
//                     {/* Sidebar content here */}
//                     {navItems}

//                 </ul>

//             </div>
//         </div>
// }




