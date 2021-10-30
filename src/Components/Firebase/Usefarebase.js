import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup,updateProfile, signOut } from 'firebase/auth';
import { useEffect, useState } from "react";
import initializeAuthentication from './Firebase.init';

initializeAuthentication()
const Usefarebase = () => {

    const [users, setUsers] = useState({})
    const [isLoading, setsLoading] = useState(true)
    const [name,setName]=useState('')
    const [error, setError] = useState('')
    const auth = getAuth();
    //Google
    const signInusonGoogle = () => {
        setsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
            .finally(() => setsLoading(false))
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorCode, errorMessage)
            });

    }
    //New User
    const EmailSignIn = (email, password) => {
        setsLoading(true)

      return  createUserWithEmailAndPassword(auth, email, password)
            // .then(result => {
            //     const user = result.user
            //     console.log(user);
            //     setUsers(user)
            //     setUserName()

            // })
            .finally(() => setsLoading(false))

            .catch(error => {
                setError(error.message)
            })

    }
    //Login
    const processLogin = (email, password) => {
        setsLoading(true)

    return    signInWithEmailAndPassword(auth, email, password)
            // .then(result => {
            //     const user = result.user
            //     console.log(user);
            //     setUsers(user)
            // })
            .finally(() => setsLoading(false))

            .catch(error => {
                setError(error.message)
            })
    }


    useEffect(() => {
        const usnsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUsers(user)
            } else {
                setUsers({})
            }
            setsLoading(false)
        });

        return () => usnsubscribed
    }, [])

    //logOut
    const logOut = () => {
        setsLoading(true)
        signOut(auth)
            .then(() => { })
            .finally(() => setsLoading(false))
    }
    //
    const setUserName=()=>{
        updateProfile(auth.currentUser,{
            displayName:name
        })
        .then(result=>{
            window.location.reload()
        })
    }
    //Name
   const handleName=e=>{
       setName(e.target.value)
   }
    return {
        
        logOut,
        signInusonGoogle,
        isLoading,
        EmailSignIn,
        processLogin,
        handleName,
        setError,
        error,
        setUsers,
        users,
        setUserName

    }

}

export default Usefarebase;