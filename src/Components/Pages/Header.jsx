import React from 'react';
import { Link } from 'react-router-dom';

import '../Css/Header.css'





const Header = () => {
    return (
        <div className='w-full h-screen bg-background '>
            <nav className=' text-white flex justify-between pt-2 items-center  px-20'>

                <Link to="/">
                    <img className='h-20' src="https://i.ibb.co/JKx1xBm/logo.png" alt="" />
                </Link>

                <div>
                    <input placeholder='Search your Destination...' className='py-3 px-20 rounded-lg  border-2 ' type="text" name="" id="" />
                </div>
                <ul className='flex gap-5'>
                    <Link to="/">News</Link>
                    <Link to="/Destination">Destination</Link>
                    <Link to="/Blog">Blog</Link>
                    <Link to="/Contact">Contact</Link>

                </ul>
            </nav>
            {/* here isi banner section */}
            <div className='flex items-center w-full h-screen'>
                <div className='w-1/2 text-white ml-10'>
                    <h1 className='text-6xl font-bold text-white'>Cox's bazar</h1>
                    <p className='font-bold font-sans w-11/12  py-8'>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                    <button className='text-white p-4 px-6 bg-orange-500 rounded-lg'>
                        Booking
                    </button>

                </div>

            </div>
        </div>
    );
};

export default Header;