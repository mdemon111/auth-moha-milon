import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../firbase/firebase.config";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider()

 const AuthProviter = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInGoogle = () =>{
        setLoading(true)
       return signInWithPopup(auth, googleProvider)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
            console.log('observing current user', currentUser);
        })
        return() =>{
            unSubscribe()
        }
    }, [])


    const authInfo = { 
        user, 
        loading,
        createUser, 
        signInUser,
        signInGoogle,
        logOut 
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviter;

AuthProviter.propTypes = {
    children: PropTypes.node
}

/**
 * 1. createContext and export it 
 * 2. set provider with value 
 * 3. use the auth provider in the main.jax file 
 * 4. access children in the AuthProvider component as children and use it in the middle of the provider.
 */