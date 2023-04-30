import React from 'react';
import { FaStar } from 'react-icons/fa';

const Single = ({ data }) => {



    let { description, description1, description2, img, money, title, rating, total } = data



    return (
        <div className='flex mt-4'>

            <div>
                <img className='w-[270px] pb-4 rounded-lg h-[200px]' src={img} alt="" />
            </div>

            <div className='pl-4'>
                <h1 className='w-10/12'>{title}</h1>
                <p className='pt-3'>{description}</p>
                <p className='py-3'>{description1}</p>
                <p>{description2}</p>
                <div>

                    <p className='flex items-center'><FaStar></FaStar> {rating}</p>
                    <p>{money}</p>
                </div>

            </div>




        </div>
    );
};

export default Single;