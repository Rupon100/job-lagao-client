import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from '../../Firebase/firebase.init';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, pass) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, pass);
    }

    // update user displayName when login
    const updateName = (name) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name
        })
    }

    const loginUser = (email, pass) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth ,email, pass);
    }

    const logOut = () => {
        signOut(auth);
    }


    // get current user 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setLoading(false);
            setUser(currentUser);
        })
        // now unmount it
        return () => unsubscribe();
    }), []

    const info = {
        name: "Hello",
        user,
        loading,
        createUser,
        loginUser,
        updateName,
        logOut
    }

    return (
        <AuthContext.Provider value={info} >
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;