import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.init';

export const authContext = createContext();
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // console.log(user);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logOutUser = () => {
        return signOut(auth);
    }

    const userSingIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, [])

    const authData = {
      user,
      setUser,
      createUser,
      logOutUser,
      userSingIn,
      loading,
      setLoading
    };

  return <authContext.Provider value={authData}>{children}</authContext.Provider>;
}

export default AuthProvider
