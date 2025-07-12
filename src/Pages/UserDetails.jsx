import { useContext, useState } from "react";
import { useEffect } from "react";
import { ContextCoffee } from "../Authantication/GoogleAuth";
import Loader from "../Components/Loader";
import { FaEdit, FaTrash } from 'react-icons/fa';



const UserDetails = () => {

    const { loader, setLoader } = useContext(ContextCoffee)

    const [users, setUsers] = useState([])
    console.log(users)

    if (loader) {
        return <Loader></Loader>
    }

    useEffect(() => {
        fetch(`http://localhost:5000/user`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setUsers(data)
                setLoader(false)
            })
    }, [])


    return (
        <div>
            {/* {
                users.map(user => <h1>the user na :{user.name}</h1>)
            } */}


            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                     <th>Desition</th>
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Number</th>
                            <th>email ads</th>
                            <th>Exitinh time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            users.map(user => <tr>
                            <th>
                                <label className="flex gap-1.5">
                                   <td className="text-sl rounded bg-red-300 p-3"><FaTrash /></td> 
                                   <td className="text-sl rounded bg-green-300  p-3"><FaEdit /></td> 
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={user.photo}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{user.name}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {user.number}
                            </td>
                            <td>{user.email}</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">Exitinh time</button>
                            </th>
                        </tr>)
                        }

                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default UserDetails;