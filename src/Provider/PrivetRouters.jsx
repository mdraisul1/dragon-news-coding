import React, { use } from 'react'
import { authContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivetRouters = ({children}) => {

    const {user, loading} = use(authContext);
    const location = useLocation();
    console.log(location);

    if(loading){
        return <span className="loading loading-bars loading-lg"></span>;
    }
   
    if(user && user?.email){
        return children;
    }
    return (
      <Navigate
      to={"/auth/login"}
      state={{ from: location }}
      replace
      ></Navigate>
    );

}

export default PrivetRouters
