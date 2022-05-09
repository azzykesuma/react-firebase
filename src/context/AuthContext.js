// the idea of context is to make sure that the browser knows the login have happened
// anywhere in the application
// the context is the place where the data is stored

import React, {useContext,useState,useEffect} from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}
export const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);

    const value = {
        user
    }
    
    // creating user
    const auth = getAuth();

    const signUp = (email,password) => {
        return createUserWithEmailAndPassword(email,password)
    }

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