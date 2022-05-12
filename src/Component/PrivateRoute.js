import { getAuth } from "firebase/auth"; 
import Login from './Login'
import Dashboard from './Dashboard';
import { Navigate } from "react-router-dom";
import { useEffect } from "react";


const PrivateRoute = () => {
    const auth = getAuth();
    const user = auth.currentUser;
    console.log(user);
    useEffect(() => {
        if(!user) {
            <Navigate to="/login" replace />
        }
    })

    return user ? <Dashboard /> : <Login />
}
 
export default PrivateRoute;