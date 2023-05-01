import React, { useContext } from 'react';
import { contexM } from '../AuthProvider/ContexProvider';
import { Navigate, useLocation } from 'react-router-dom';

import { Blocks } from 'react-loader-spinner'


const PrivateRoute = ({ children }) => {

    let location = useLocation()

    console.log("location", location);

    let { user, loder } = useContext(contexM)


    // if (loder) {
    //     return <Blocks
    //         visible={true}
    //         height="80"
    //         width="80"
    //         ariaLabel="blocks-loading"
    //         wrapperStyle={{}}
    //         wrapperClass="blocks-wrapper"
    //     />
    // }


    if (user) {
        return children
    }

    return <Navigate state={{ form: location }} to="/Login"></Navigate>

};

export default PrivateRoute;