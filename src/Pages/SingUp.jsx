import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextCoffee } from "../Authantication/GoogleAuth";
import { useState } from "react";
import Swal from "sweetalert2";

const SingUp = () => {

    //get coffee context
    const { signUp, setData } = useContext(ContextCoffee)
    const [createSuccess, setCreateSuccess] = useState([])



    const hendleCreateUser = (e) => {
        e.preventDefault()

        const form = new FormData(e.target)
        const name = form.get('name')
        const photo = form.get('photo')
        const number = form.get('number')
        const email = form.get('email')
        const password = form.get('password')



        //create user for firebase auth
        signUp(email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                const createTime = user.metadata.lastSignInTime
                console.log(user)
                console.log(userCredential?.message)
                if (user?.email) {
                    setCreateSuccess(user)
                    Swal.fire({
                        title: "Create Done",
                        icon: "success",
                        draggable: true
                    });
                }
                const userData = { name, photo, number, email, createTime }
                fetch('http://localhost:5000/user', {
                    method: 'POST',
                    body: JSON.stringify(userData),
                    headers: {
                        'Content-type': 'application/json',
                    },
                })
                    .then(res => res.json())
                    .then(data => console.log(data))

                //ser User Name and photo url
                setData(name, photo)
                    .then(() => {
                        console.log('Profile updated!')
                        // ...
                    }).catch((error) => {
                        console.log('An error occurred', error)
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                if (error) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: 'Please check your information',
                        footer: `<a href="#">${errorMessage}</a>`
                    });
                }
            });
    }


    return (
        <div className="hero bg-base-200 min-h-screen">

            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={hendleCreateUser}>
                        <fieldset className="fieldset">
                            <label className="label">Name</label>
                            <input name="name" type="name" className="input" placeholder="name" required />

                            <label className="label">photo link</label>
                            <input name="photo" type="photo link" className="input" placeholder="photo link" required />

                            <label className="label">Phone number</label>
                            <input name="number" type="phone number" className="input" placeholder="phone number" required />

                            <label className="label">Email</label>
                            <input name="email" type="email" className="input" placeholder="Email" required />
                            <label className="label">Password</label>
                            <input name="password" type="password" className="input" placeholder="Password" required />
                            <button className="btn btn-neutral mt-4">Create</button>
                        </fieldset>
                    </form>
                    <Link className="btn btn-neutral mt-2" to={'/login'}><button className="">I have an Account</button></Link>
                </div>
            </div>

        </div>
    );
};

export default SingUp;