import React, { useEffect, useState } from 'react';


import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from './firebase.config';
import { createContext } from 'react';



export let contexM = createContext(null)

let auth = getAuth(app)

const ContexProvider = ({ children }) => {


    let [loder, SetLoding] = useState(true)




    let Register = (email, password) => {
        SetLoding(true)

        return createUserWithEmailAndPassword(auth, email, password)
    }


    let SingIn = (email, password) => {

        SetLoding(true)

        return signInWithEmailAndPassword(auth, email, password)

    }

    let [user, SetUser] = useState(null)

    console.log(user);

    useEffect(() => {
        let offIt = onAuthStateChanged(auth, LoginUser => {
            console.log("all ok", LoginUser);
            SetUser(LoginUser)



        })
        return (() => {
            offIt()
        })



    }, [])

    let Logout = () => {
        SetLoding(true)

        return signOut(auth)
    }


    let infoProvider = {
        loder,
        Register,
        SingIn,
        user,
        Logout



    }



    return <contexM.Provider value={infoProvider}>
        {children}
    </contexM.Provider>

};

export default ContexProvider;