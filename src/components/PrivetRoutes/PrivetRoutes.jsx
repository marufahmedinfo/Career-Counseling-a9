import React, { useContext } from 'react';
import { authContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { RingLoader } from 'react-spinners';

const PrivetRoutes = ({ children }) => {
    const location = useLocation();
    const {user,loading} = useContext(authContext);
    if(loading){
        return <RingLoader size={300}/>
    }
    if(!user){
        return <Navigate state={{from:location.pathname}} to={'/login'}></Navigate>
    }
    return children;
};

export default PrivetRoutes;