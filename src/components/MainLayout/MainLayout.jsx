import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';

const MainLayout = () => {
    return (
        <div>
            <div className='md:max-w-7xl pb-12 container mx-auto'>
                <Navbar></Navbar>
                <div className='min-h-[calc(100vh-300px)]'>
                    <Outlet></Outlet>
                </div>
            </div>
                <Footer></Footer>
        </div>
    );
};

export default MainLayout;