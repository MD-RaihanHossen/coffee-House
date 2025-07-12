import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { ContextCoffee } from "../Authantication/GoogleAuth";


const Navbar = () => {

    //get user form googleAuth form observer
    const { user, logOut } = useContext(ContextCoffee)

    const hendleLogOut = () => {
        logOut()
            .then(() => {
                console.log('Sign-out successful.')
            }).catch((error) => {
                console.log('An error happened', error.message)
            });
    }

    const buttton = <div className="flex sm:flex-col md:flex-row justify-center items-center">
        <NavLink to={'/'} className=" px-4 py-2">Home</NavLink>
        <NavLink to={'/addcoffees'} className=" px-6 font-semibold py-2">Add Coffee</NavLink>
        <NavLink to={'/about'} className=" px-6 font-semibold py-2">About</NavLink>
        <NavLink to={'/vlogs'} className=" px-6 font-semibold py-2">Vlogs</NavLink>
        <NavLink to={'/userInfo'} className=" px-6 font-semibold py-2">User Info</NavLink>
    </div>

    return (
        <div className="navbar bg-base-100 p-0 max-w-7xl mx-auto shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {buttton}
                    </ul>
                </div>
                <a className="btn btn-ghost font-bold text-xl ">{user && user?.email ? <div className="flex justify-center items-center gap-4">
                    <img className="w-[60px] h-[60px] object-cover rounded-[50%]" src={user?.photoURL} alt="" />
                    <p className="">{user?.displayName}</p>
                </div> : ''}</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {buttton}
                </ul>
            </div>
            <div className="navbar-end">

                {
                    user && user?.email ? (<button onClick={hendleLogOut} className="btn font-bold">Log Out</button>) : (<Link to={'/login'}><button className="btn font-bold">log in</button></Link>)
                }


            </div>
        </div>
    );
};

export default Navbar;