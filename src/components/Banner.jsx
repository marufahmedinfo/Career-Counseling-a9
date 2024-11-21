import React from 'react';
import bannerImg1 from '../assets/banner (1).jpg'
import bannerImg2 from '../assets/banner (2).jpg'
import bannerImg3 from '../assets/banner (3).jpg'

const Banner = () => {
    return (
        <div>
            <div className="carousel md:h-[500px] object-cover w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src={bannerImg2}
                        className="w-full object-cover rounded-xl" />
                    <div className="absolute left-4 right-4 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src={bannerImg3}
                        className="w-full object-cover rounded-xl" />
                    <div className="absolute left-4 right-4 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src={bannerImg1}
                        className="w-full object-cover rounded-xl" />
                    <div className="absolute left-4 right-4 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;