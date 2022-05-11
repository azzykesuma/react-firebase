import { Outlet } from 'react-router-dom';
import { getAuth } from "firebase/auth"; 
import Login from './Login'


const ProtectedPage = () => {
    const auth = getAuth();
    const user = auth.currentUser();

    return user ? <Outlet /> : <Login />
}
 
export default ProtectedPage;