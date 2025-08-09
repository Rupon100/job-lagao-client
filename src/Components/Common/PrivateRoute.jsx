import React, { useContext } from 'react';
import { AuthContext } from '../../Auth/AuthProvider/AuthProvider';
 
import { Navigate, useLocation } from 'react-router-dom';
import Loading from './Loading';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if(loading){
        return <Loading></Loading>
    }

    if(user){
        return children;
    }
    return (
        <div>
            <Navigate to={'/login'} state={location} replace ></Navigate>
        </div>
    );
};

export default PrivateRoute;