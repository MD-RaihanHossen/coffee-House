import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { useState } from "react";
import { createContext } from "react";
import { auth } from "./firebaseAuth_keys";
import { useEffect } from "react";


export const ContextCoffee = createContext()

const GoogleAuth = ({ children }) => {

    const [user, setUser] = useState(null)
    //for loader 
    const [loader, setLoader] = useState(true)

    //create coffee user to put in firebase 
    const signUp = (email, password) => {
        setUser(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    //login user 
    const login = (email, password) => {
        setUser(true)
        return signInWithEmailAndPassword(auth, email, password)
    };

    //log Out users
    const logOut = () => {
        setUser(true)
        return signOut(auth)
    }

    //update Name and Profile photos
    const setData = (name, photo) => {
        
        return updateProfile(auth.currentUser, {
            displayName: `${name}`, 
            photoURL : `${photo}`,
        })
    }

    //observer for current user 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {

            user?.email && setUser(user)
            setLoader(false)
        })

        return () => {
            unSubscribe()
        }

    }, []);


    const coffeeUser = {
        user,
        loader,
        setLoader,
        signUp,
        login,
        logOut,
        setData,
    }

    return (
        <ContextCoffee.Provider value={coffeeUser}>
            {children}
        </ContextCoffee.Provider>
    );
};

export default GoogleAuth;




// const setData = (name, photo) => {
//         console.log(name, photo)
//         return updateProfile(auth.currentUser, {
//             displayName: `${name}`, 
//             photoURL : `${photo}`,
//         })
//     }