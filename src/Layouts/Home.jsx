
import { NavLink, useLoaderData } from 'react-router-dom';
import Banner from '../components/Banner';
import AllCardsData from '../components/pages/AllCardsData';
import AboutUs from '../components/AboutUs';
import Gallery from '../components/Gallery';


const Home = () => {
    const cart = useLoaderData()


    return (
        <div className='relative'>
            <Banner />
            <div className='md:my-24'>
                <h1 className='text-center font-bold text-4xl text-[#2E948E] my-12'>Our Services</h1>
                <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-7'>
                    {
                        cart.slice(0,6).map((cards) => <AllCardsData key={cards.id} cards={cards}></AllCardsData>)
                    }
                </div>
                <button className='mx-auto block mt-10 border border-[#2E948E] p-2 rounded-lg'>
                    <NavLink className='btn bg-[#2E948E] text-white text-xl' to={'/service'}>Show More</NavLink>
                </button>
            </div>
            <AboutUs></AboutUs>
            <Gallery></Gallery>

        </div>
    );
};

export default Home;