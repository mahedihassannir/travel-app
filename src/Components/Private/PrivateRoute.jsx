import React, { useContext } from 'react';
import { contexM } from '../AuthProvider/ContexProvider';
import { Navigate, useLocation } from 'react-router-dom';



const PrivateRoute = ({ children }) => {

    let location = useLocation()

    console.log("location", location);

    let { user } = useContext(contexM)


    if (user) {
        return children
    }

    return <Navigate state={{ form: location }} to="/Login"></Navigate>

};

export default PrivateRoute;