import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import img1 from '../assets/cart (1).jfif'
import img2 from '../assets/cart (2).jpg'
import img3 from '../assets/cart (3).jpg'
import img4 from '../assets/cart (4).jpg'
import img5 from '../assets/cart (5).jpg'
import img6 from '../assets/cart (6).jpg'
import img7 from '../assets/cart (7).jpg'
import img8 from '../assets/cart (8).jpg'
import img9 from '../assets/cart (9).jpg'
import img10 from '../assets/cart (10).jpg'

const Gallery = () => {
    return (
        <div className='my-24'>
            <h1 className='text-4xl font-bold text-center text-[#2E948E] mb-16'>Gallery</h1>
            <Marquee speed={100}>
                <Link to={'/'}>
                <img className='h-72 w-72 mx-5 rounded-xl object-cover' src={img1} alt="photo gallery" />
                </Link>
                <Link to={'/'}>
                <img className='h-72 w-72 mx-5 rounded-xl object-cover' src={img2} alt="photo gallery" />
                </Link>
                <Link to={'/'}>
                <img className='h-72 w-72 mx-5 rounded-xl object-cover' src={img3} alt="photo gallery" />
                </Link>
                <Link to={'/'}>
                <img className='h-72 w-72 mx-5 rounded-xl object-cover' src={img4} alt="photo gallery" />
                </Link>
                <Link to={'/'}>
                <img className='h-72 w-72 mx-5 rounded-xl object-cover' src={img5} alt="photo gallery" />
                </Link>
                <Link to={'/'}>
                <img className='h-72 w-72 mx-5 rounded-xl object-cover' src={img6} alt="photo gallery" />
                </Link>
                <Link to={'/'}>
                <img className='h-72 w-72 mx-5 rounded-xl object-cover' src={img7} alt="photo gallery" />
                </Link>
                <Link to={'/'}>
                <img className='h-72 w-72 mx-5 rounded-xl object-cover' src={img8} alt="photo gallery" />
                </Link>
                <Link to={'/'}>
                <img className='h-72 w-72 mx-5 rounded-xl object-cover' src={img9} alt="photo gallery" />
                </Link>
                <Link to={'/'}>
                <img className='h-72 w-72 mx-5 rounded-xl object-cover' src={img10} alt="photo gallery" />
                </Link>
            </Marquee>
        </div>
    );
};

export default Gallery;