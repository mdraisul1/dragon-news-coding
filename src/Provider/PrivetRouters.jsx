import React, { use } from 'react'
import { authContext } from './AuthProvider';
import { Navigate } from 'react-router';

const PrivetRouters = ({children}) => {

    const {user, loading} = use(authContext);

    if(loading){
        return <span className="loading loading-bars loading-lg"></span>;
    }
   
    if(user && user?.email){
        return children;
    }
    return <Navigate to={'/auth/login'}></Navigate>

}

export default PrivetRouters
