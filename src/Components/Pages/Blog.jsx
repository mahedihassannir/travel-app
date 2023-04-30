import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Single from './Single';

const Blog = () => {


    let [data, Setdata] = useState([])

    useEffect(() => {
        let url = `https://travle-agency-app-server-mahedinir34678-gmailcom.vercel.app/server`
        fetch(url)
            .then(res => res.json())
            .then(data => Setdata(data))


    }, [])



    return (
        <div className='border-t-2 w-11/12 mx-auto mt-5 '>
            <div className='pt-5'>
                <p>252 stays Apr 13-17 3 guests</p>
                <h1 className='text-[24px] font-bold'>Stay in Cox’s Bazar</h1>
            </div>
            {/* here is blog info  */}

            <div className='flex' >

                <div className='w-1/2'>
                    {
                        data.map(res => <Single

                            key={res.rating}
                            data={res}


                        ></Single>)
                    }
                </div>
                {/* blog info ends */}

                {/*here is map  */}
                <div className='w-1/2'>


                </div>
                {/* here is map ends */}
            </div>
        </div>
    );
};

export default Blog;