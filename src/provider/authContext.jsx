import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from './../firebase/Firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";



export const authContext=createContext(null)



const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true);


    const googleProvider=new GoogleAuthProvider;

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signInWithGoogle=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const logOut=()=>{
        setLoading(true)
      return  signOut(auth);
    }
    useEffect(()=>{
       const unSubscribe= onAuthStateChanged(auth,CurrentUser=>{
              setUser(CurrentUser);
              console.log('observing current user in side useEffect',CurrentUser)
              setLoading(false)
        });
        return ()=>{
            unSubscribe()
        }
    },[])

const authInfo={
    logOut,
    loading,
    user,
    createUser,
    signInWithGoogle,
    signInUser}

    return (
        <authContext.Provider value={authInfo}>
                {children}
        </authContext.Provider>
    );
};

AuthProvider.propTypes={
    children:PropTypes.node.isRequired,
}

export default AuthProvider;