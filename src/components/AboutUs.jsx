import React from 'react';
import aboutImg from '../assets/cart (10).jpg'

const AboutUs = () => {
    return (
        <div className='grid md:grid-cols-2 gap-20 grid-cols-1 items-center m-5 p-5 my-28'>
            {/* Image Section */}
            <div className='flex-1 pr-5'>
                <img
                    src={aboutImg}
                    alt="About Us"
                    className='w-full rounded-xl'
                />
            </div>

            {/* Text Section */}
            <div className='flex-1 justify-normal'>
                <h2 className='text-[#2E948E] text-4xl font-bold text-center mb-3'>About Us</h2>
                <p className='text-lg'>
                    We, Career Expert, situated at Malad West, Mumbai, Maharashtra, are a leading institute offering
                    a wide range of computer courses and career counselling services for all. Our uniquely designed
                    curriculum makes our students employable and future ready. If you have any confusion or doubt
                    regarding any aspect of your career, we will help you with our effective career counselling
                    services. Our professional team works harmoniously in unison, pushing the frontiers in growth
                    and quality in imparting education.
                </p>
            </div>
        </div>
    );
};

export default AboutUs;