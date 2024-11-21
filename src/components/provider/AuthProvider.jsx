import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../../firebase/firebase.config';

export const authContext = createContext();

const AuthProvider = ({ router }) => {
    const [loading, setLoading] = useState(true)

    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    // console.log(router)
    const handleRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const handleLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const handleGoogleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const updateProfileProfile = (updateData) => {
        return updateProfile(auth.currentUser, updateData)
    }
    const handleLogOut = () => {
        return signOut(auth)
    }
    const authInfo = {
        user,
        setUser,
        handleRegister,
        handleLogin,
        handleGoogleLogin,
        handleLogOut,
        updateProfileProfile,
        loading
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)

        })
        return () => {
            unsubscribe();
        }
    }, [])
    return (
        <div>
            <authContext.Provider value={authInfo}>{router}</authContext.Provider>

        </div>
    );
};

export default AuthProvider;