import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllCardsData from './AllCardsData';
import { Helmet } from 'react-helmet-async';

const Services = () => {
    const services = useLoaderData();
    return (
        <div>
            <Helmet>
            <title>services|Career Counseling</title>
        </Helmet>
            <h1 className='text-6xl font-bold text-center text-[#2E948E]'>Our Services</h1>

        <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-7 my-28'>
            {
                services.map((cards) => <AllCardsData key={cards.id} cards={cards}></AllCardsData>)
            }
        </div>
        </div>
    );
};

export default Services;