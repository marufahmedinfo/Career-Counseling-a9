import React from 'react';
import { NavLink } from 'react-router-dom';

const AllCardsData = ({ cards }) => {
    const { counselor, rating, img_url, service_name, category, pricing, id } = cards;
    return (
        <div className="card bg-base-100 w-96 md:w-80 shadow-xl">
            <figure className="px-5 pt-5">
                <img
                    src={img_url}
                    alt="loading....."
                    className="rounded-xl object-cover" />
            </figure>
            <div className="card-body">
                <div className='flex justify-between items-center'>
                    <h2 className="card-title">{service_name}</h2>
                    <p className='text-end'>{category}</p>
                </div>
                <p>Price : {pricing}</p>
                <p>Rating : {rating}</p>
                <h2 className='text-lg font-semibold'>Counselor Name : {counselor}</h2>
                <div className="card-actions">
                    <NavLink to={`/details/${id}`}>
                        <button className="btn bg-gradient-to-r from-[#2E948E] to-[#e6ac56] text-white">Learn More</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default AllCardsData;