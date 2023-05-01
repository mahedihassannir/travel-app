import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { contexM } from '../AuthProvider/ContexProvider';







const Header = () => {

    let { user, Logout } = useContext(contexM)

    let logout = () => {

        Logout()
            .then(res => {
                let logedUser = res.user
                console.log(logedUser);
            })
            .catch(err => {
                console.log(err);
            })


    }

    return (
        <div className=''>
            <nav className='  text-white flex justify-between pt-2 items-center  px-20'>

                <Link to="/">
                    <img className='h-20' src="https://i.ibb.co/zNm5nVN/image.png" alt="" />
                </Link>

                <div>
                    <input placeholder='Search your Destination...' className='py-3 px-20 rounded-lg  border-2 ' type="text" name="" id="" />
                </div>
                <ul className='flex gap-5'>
                    <Link to="/">News</Link>
                    <Link to="/Destination">Destination</Link>
                    <Link to="/Blog">Blog</Link>
                    <Link to="/Contact">Contact</Link>
                    {
                        user &&
                        <p className='text-red-400'>{user.email}</p>
                    }
                    {
                        user ?
                            <button onClick={logout} className='py-3 px-6 rounded-lg bg-gray-300'>Logout</button> :
                            <Link to="/Login">Login</Link>

                    }


                </ul>
            </nav>


        </div>
    );
};

export default Header;