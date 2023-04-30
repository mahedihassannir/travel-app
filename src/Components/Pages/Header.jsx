import React from 'react';
import { Link } from 'react-router-dom';






const Header = () => {
    return (
        <div>
            <nav className='flex justify-between pt-2 items-center  px-20'>

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
        </div>
    );
};

export default Header;