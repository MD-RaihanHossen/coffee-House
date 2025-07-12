import { useContext } from "react";
import { ContextCoffee } from "../Authantication/GoogleAuth";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Components/Loader";


const PrivetRoutes = ({children}) => {
    //set users 
    const {user} = useContext(ContextCoffee)
    //make loader
    const { loader } = useContext(ContextCoffee)

    //const get locaion 
    const location = useLocation()
    console.log(location)

    if(loader){
        return <Loader></Loader>
    }

    if(user && user?.email){
        return <div>
            {children}
        </div>
    }

    return (
        <div>
            <Navigate state={location.pathname} to={'/login'}></Navigate>
        </div>
    );
};

export default PrivetRoutes;