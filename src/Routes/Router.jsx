import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Components/Home";
import AddCoffees from "../Components/AddCoffees";
import EditCoffee from "../Pages/EditCoffee";
import Login from "../Pages/Login";
import SingUp from "../Pages/SingUp";
import PrivetRoutes from "../PrivetRoutes/PrivetRoutes";
import UserDetails from "../Pages/UserDetails";


const Router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children: [
            {
                path : '/',
                element : <Home></Home>,
                 loader : () => fetch('http://localhost:5000/')

            },
            {
                path: '/addcoffees',
                element : <PrivetRoutes><AddCoffees></AddCoffees></PrivetRoutes>,
            },
            {
                path: '/editcoffee/:id',
                element: <EditCoffee></EditCoffee>,
                loader: async({params}) => await fetch(`http://localhost:5000/coffee/${params.id}`)
            }, 
            {
                path:'/login',
                element: <Login></Login>,
            },
            {
                path:'/singup',
                element: <SingUp></SingUp>,
            },
            {
                path : '/userInfo',
                element : <PrivetRoutes> <UserDetails></UserDetails> </PrivetRoutes>,
            }, 

        ]
    },
])

export default Router;