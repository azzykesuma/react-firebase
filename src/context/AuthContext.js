// the idea of context is to make sure that the browser knows the login have happened
// anywhere in the application
// the context is the place where the data is stored

import React, {useContext,useState,useEffect} from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}
export const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);

    const signUp = (email,password) => {
        createUserWithEmailAndPassword(auth,email,password)
            .then((cred) => {
                console.log(cred.user);
                setUser(cred.user);
            })
    }

    const value = {
        user,
        signUp
    }
    
    // creating user
    const auth = getAuth();


    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setUser(user)
        })

        return unsubscribe
    },[])


    return (
        <AuthContext.Provider value={value}>
        {children}
        </AuthContext.Provider>
    );
} 