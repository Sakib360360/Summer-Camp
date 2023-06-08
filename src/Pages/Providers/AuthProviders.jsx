import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../../../firebase.config';
import useAxios from '../../Hooks/useAxios';



export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProviders = ({children}) => {
    const [axiosInstance] = useAxios()
    const [loading,setLoading] = useState(true)
    const [user,setUser] = useState(null)
    const [paymentItem,setPaymentItem] = useState({})
    const googleProvider = new GoogleAuthProvider()

    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const updateUserProfile = (name,photo)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,{
            displayName:name, photoURL:photo
        })
    }

    const signInUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email,password)
    }

    const googleSignIn = () =>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            // get and set token
            if(currentUser){
                axiosInstance.post('/jwt', {email:currentUser?.email})
                .then(response=>{
                    
                    localStorage.setItem('access-token',response.data.token)
                    setLoading(false)
                })
            }else{
                localStorage.removeItem('access-token')
            }
            
        })
        return ()=>{
            return unsubscribe()
        }
    },[])

    const authInfo={
        user,
        createUser,
        logOut,
        googleSignIn,
        signInUser,
        updateUserProfile,
        loading,
        setPaymentItem,
        paymentItem

    }
   
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;