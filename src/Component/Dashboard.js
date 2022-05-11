import { Card,Button } from 'react-bootstrap'
import { getAuth, signOut } from "firebase/auth";
import { useNavigate,Link,Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';

const Dashboard = () => {
    const Navigate = useNavigate();

    const { user } = useAuth();
    const handleLogout = e => {
        e.preventDefault();
        const auth = getAuth();

        signOut(auth).then(() => {
            console.log(`logged out`);
            Navigate('/login');
        })

    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-2'>Profile</h2>
                    <strong>Email :</strong> {user.email ? user.email : 'no user'}
                    <Link to='update-profile' className='btn btn-primary mt-3 w-100'>Update Profile</Link>
                </Card.Body>
               
            </Card>
            <div className='w-100 text-center mt-2'>
                <Button variant='link' onClick={handleLogout}>Log out</Button>
            </div>
        </>
    );
}
 
export default Dashboard;