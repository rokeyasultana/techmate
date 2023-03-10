import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../../Pages/Home/Home/Shared/Loading/Loading'
const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);

    
    const location = useLocation();

    if(loading){
        return <Loading></Loading>
    }

    if (user && isAdmin){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default  AdminRoute ;