import { Card,Button } from 'react-bootstrap'
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
    const { user } = useAuth();
    const Navigate = useNavigate();
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
                    <h2 className='text-center mb-2'>Sign Up</h2>
                </Card.Body>
                <strong> email :</strong> {user.email}
            </Card>
            <div className='w-100 text-center mt-2'>
                <Button variant='link' onClick={handleLogout}>Log out</Button>
            </div>
        </>
    );
}
 
export default Dashboard;