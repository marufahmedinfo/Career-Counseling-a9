import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logoImg from '../assets/logo.png'
import { authContext } from './provider/AuthProvider';

const Navbar = () => {
    const { user, handleLogOut } = useContext(authContext);
    const navlink = <>
        <li className='md:mx-4 mx-2'><NavLink className={({ isActive }) =>
            `px-7 py-3 text-lg rounded-2xl ${isActive ? 'underline hover:font-bold font-bold text-[#2E948E]' : 'hover:underline hover:text-blue-950 hover:font-bold'}`} to={'/'}>Home</NavLink></li>
        <li className='md:mx-4 mx-2'><NavLink className={({ isActive }) =>
            `px-7 py-3 text-lg rounded-2xl ${isActive ? 'underline hover:font-bold font-bold text-[#2E948E]' : 'hover:underline hover:text-blue-950 hover:font-bold'}`} to={'/service'}>Services</NavLink></li>
        <li className='md:mx-4 mx-2'><NavLink className={({ isActive }) =>
            `px-7 py-3 text-lg rounded-2xl ${isActive ? 'underline hover:font-bold font-bold text-[#2E948E]' : 'hover:underline hover:text-blue-950 hover:font-bold'}`} to={'/aboutus'}>AboutUs</NavLink></li>
        <li className='md:mx-4 mx-2'><NavLink className={({ isActive }) =>
            `px-7 py-3 text-lg rounded-2xl ${isActive ? 'underline hover:font-bold font-bold text-[#2E948E]' : 'hover:underline hover:text-blue-950 hover:font-bold'}`} to={'/profile'}>Profile</NavLink></li>


    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
                        {navlink}
                    </ul>
                </div>
                <Link to={'/'}><img className='h-10 w-10 mr-3' src={logoImg} alt="" /></Link>
                <Link to={'/'} className="text-2xl font-semibold text-[#2E948E]">Career Expert</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlink}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user && user.email ?
                        <div className='flex items-center gap-5'>
                            <div className="tooltip tooltip-left" data-tip={user.displayName}>

                            <Link to={'/profile'}>
                                <img src={user.photoURL} className="h-16 w-16 rounded-full object-cover" alt="" />
                            </Link>
                            </div>

                            <button onClick={handleLogOut} className="btn bg-gradient-to-r from-[#2E948E] to-[#ecab4a] text-white text-center px-7 py-2 text-lg">Log Out</button>
                        </div>
                        :
                        <NavLink to={'/login'} className="btn bg-gradient-to-r from-[#2E948E] to-[#ecab4a] text-white text-center px-7 py-2 text-lg">Login</NavLink>

                }
            </div>
        </div >
    );
};

export default Navbar;