import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut } from "firebase/auth";

import { useEffect, useState } from "react";

import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication()

const useFirebase=()=>{
    const [user,setUser]=useState({})

    const [isLoading,setIsLoding]=useState(true);

    const auth=getAuth()

    const signInUsingGoogle=()=>{
        setIsLoding(true)
        const googleProvider= new GoogleAuthProvider()

        // amichange korci
        return  signInWithPopup(auth, googleProvider)
          .then(result=>{
              setUser(result.user)
          })
        
            .finally(()=>setIsLoding(false))
    }



    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } else {
              setUser({})
            }
            setIsLoding(false)
          });

          return ()=> unsubscribe
          
    },[auth])

    const logOut=()=>{
        signOut(auth)
        .then(() => {
            
          }).catch((error) => {
            
          });
    }


    return {
        signInUsingGoogle,
        user,
        isLoading,
        logOut
    }
}

export default useFirebase;