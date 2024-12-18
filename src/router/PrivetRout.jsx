import { useContext } from 'react';
import AuthContext from '../context/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRout = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
      

    if(loading){
        return <><span className="loading loading-ring loading-lg"></span><span className="loading loading-ring loading-lg"></span></>
    }

    if(user){
        return children
    }
    return <Navigate to={'/login'} state={location?.pathname}></Navigate>
};

export default PrivetRout;