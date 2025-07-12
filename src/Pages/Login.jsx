import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ContextCoffee } from "../Authantication/GoogleAuth";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import Swal from "sweetalert2";

const Login = () => {


    const { login } = useContext(ContextCoffee)
    //create useState for key 
    const [passwordEye, setPasswordEye] = useState(true)

    //get location 
    const location = useLocation()
    console.log(location)

    //get navigation 
    const navigate= useNavigate()


    const handleLoginForm = (e) => {
        e.preventDefault()

        const form = new FormData(e.target)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)

        //login user use by firebase
        login(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                // ...
                {
                    location && location?.state ? navigate(location.state) : navigate('/')
                }

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)

                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    footer: `<a href="#">${errorMessage}</a>`
                });

            });
    }

    const hendlePasswordEye = () => {
        console.log('raihan')
        setPasswordEye(!passwordEye)
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleLoginForm}>
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input name="email" type="email" className="input" placeholder="Email" />
                            <div className="relative">
                                <label className="label">Password</label>
                                <input name="password" type={`${passwordEye ? 'password' : 'text'}`} className={`input`} placeholder="Password" />

                                <div className="absolute top-7 right-8 md:top-7 md:right-8">
                                    {
                                        !passwordEye ? <button onClick={hendlePasswordEye} className="text-2xl"><FaEye /></button> : <button onClick={hendlePasswordEye} className="text-2xl"><FaEyeSlash /></button>
                                    }
                                </div>
                            </div>

                            <div><a className="link link-hover">Forgot password?</a></div>

                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                    </form>
                    <Link className="btn btn-neutral mt-2" to={'/singup'}><button className="">Create a New Account</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Login;