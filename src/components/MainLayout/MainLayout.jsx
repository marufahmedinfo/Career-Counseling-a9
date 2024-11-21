import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';

const MainLayout = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto'>
                <Navbar></Navbar>
                <div className='min-h-screen'>
                    <Outlet></Outlet>
                </div>
            </div>
                <Footer></Footer>
        </div>
    );
};

export default MainLayout;