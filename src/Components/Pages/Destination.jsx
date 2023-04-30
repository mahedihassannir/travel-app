import React from 'react';
import CoxBazer from '../shared/CoxBazer';

const Destination = () => {
    return (
        <div className=' bg-background  -mt-24   '>
            <div className='  flex items-center w-full h-screen'>
                <div className='w-1/2'>

                    <CoxBazer></CoxBazer>
                </div>

                <div className='w-1/2'>
                    <div className='w-[470px]  pb-10  rounded-lg bg-white'>
                        <label htmlFor="">
                            <span className='pl-5 pt-3  font-bold'>Origin</span>
                        </label>

                        <select className='w-11/12 pl-3 py-4 ml-3 mt-3 bg-[#F2F2F2]  rounded-lg' name="" id="">
                            <option className='' value="">
                                Dhaka
                            </option>

                            <option value="">
                                Comilla
                            </option>
                            <option value="">
                                Rupasdi
                            </option>

                        </select>

                        <div>
                            <label htmlFor="">
                                <span className='pl-5  font-bold'>Destination</span>
                            </label>
                            <select className='w-11/12 pl-3 py-4 ml-3 mt-10 bg-[#F2F2F2]  rounded-lg' name="" id="">
                                <option className='' value="">
                                    Cox’s Bazar
                                </option>

                                <option value="">
                                    Sreemangal
                                </option>
                                <option value="">
                                    Sundarbans
                                </option>

                            </select>
                        </div>
                        <div className=' flex  justify-center gap-10 px-20 pt-20 pl-4'>
                            <div className='w-1/2 ml-6'>
                                <label htmlFor="">
                                    <span className='text-center'>From</span>
                                </label>
                                <input className=' border-2 rounded-md  px-10 py-4' type="date" />


                            </div>

                            <div className='w-1/2'>
                                <label htmlFor="">
                                    <span className='text-center'>To</span>
                                </label>
                                <input className=' border-2 rounded-md  px-10 py-4' type="date" />


                            </div>



                        </div>

                        <div>
                            <button className='text-black py-3 w-11/12 bg-orange-400 mx-auto rounded-lg mt-4 flex justify-center'>
                                Start Booking
                            </button>
                        </div>
                    </div>

                </div>

            </div>





        </div>
    );
};

export default Destination;