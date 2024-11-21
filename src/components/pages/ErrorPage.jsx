import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-center mt-64'>
            <h1 className='text-9xl text-[#2E948E] font-bold mb-10'>404</h1>
            <p className='text-xl mb-10'>Page Not Found</p>
            <Link className='btn bg-[#2E948E] text-white px-12 text-xl' to={'/'}>GO Home</Link>
        </div>
    );
};

export default ErrorPage;