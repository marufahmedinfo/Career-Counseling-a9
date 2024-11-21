import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const { img_url, service_name, category, description, pricing, duration, counselor, rating, additional_info } = useLoaderData();
    const [comments, setComments] = useState('');
    const handleComments = (e) => {
        e.preventDefault();
        const textarea = e.target.comment.value;
        setComments(textarea)

    }
    return (
        <div className='my-16'>
            <Helmet>
                <title>Details | Career Counseling</title>
            </Helmet>

            <div className="rounded-lg p-4 mx-auto shadow-lg text-xl mb-4">
                <img
                    src={img_url}
                    alt={service_name}
                    className="w-full h-[500px] object-cover rounded-lg"
                />
                <h3 className="text-3xl text-[#2E948E] font-bold my-4">{service_name}</h3>
                <p className="text-gray-600 text-sm mb-2">
                    <span className="font-semibold">Category:</span> {category}
                </p>
                <p className="text-gray-700 mb-4">{description}</p>
                <div className="text-sm text-gray-800 mb-4">
                    <p className='mb-4 text-xl'>
                        <strong>Price:</strong> {pricing}
                    </p>
                    <p className='mb-4 text-xl'>
                        <strong>Date & Time:</strong> {duration}
                    </p>
                    <p className='mb-4 text-xl'>
                        <strong>Counselor:</strong> {counselor}
                    </p>
                    <p className='mb-4 text-xl'>
                        <strong>Rating:</strong> {rating} ⭐⭐⭐⭐
                    </p>
                </div>
                <ul className="list-disc list-inside mb-4">
                    {additional_info.topics_covered.map((topic, index) => (
                        <li key={index}>{topic}</li>
                    ))}
                </ul>
                <div>
                    <h3 className='text-[#2E948E] font-bold'>Your Comments:</h3>
                    <div className='border border-[#2E948E] h-32 w-96 rounded-2xl'>
                        <p className='ml-7'>{comments}</p>
                    </div>
                </div>
            </div>
            <div className='gap-3 items-center'>
                <h3 className='text-xl font-bold'>Comments:</h3>
                <form onSubmit={handleComments}>
                    <textarea className="textarea textarea-accent w-full" placeholder='Right Your Comments' name="comment"></textarea>
                    <button className='text-white bg-gradient-to-r from-[#2E948E] to-[#ecab4a] font-bold btn text-lg px-28'>Submit</button>
                </form>
                {/* <p>{comments}</p> */}
            </div>
        </div>
    );
};

export default Details;