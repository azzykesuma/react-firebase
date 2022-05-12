import {Card, Form , Button, Alert } from 'react-bootstrap'
import { useRef,useState } from 'react'; 
import { useAuth } from '../context/AuthContext';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { Link,Navigate,useNavigate } from 'react-router-dom';


const ForgotPassword = () => {
    const [email,setEmail] = useState('');
    const [error,setError] = useState('');
    const [loading,setLoading] = useState(false);
    const Navigate = useNavigate();

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }


    const handleSubmit = e => {
        e.preventDefault();
        const auth = getAuth();
        sendPasswordResetEmail(auth,email)
            .then(() => {
                alert('Email sent successfully');
            })
            .catch(err => {
                console.log(err.message);
            })
    }
    
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-2'>Reset Password</h2>
                    <Form onSubmit={handleSubmit}>
                        {error && <Alert variant='danger'>{error}</Alert>}
                        <Form.Group id='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                            type='email'
                            value={email}
                            onChange={handleEmailChange}
                            required
                            />
                        </Form.Group>
                        <Button type='submit' disabled={loading} className='w-100 mt-2'>Reset Password</Button>
                    </Form>
                    <div className='w-100 text-center mt-3'>
                        <Link to='/Login'>Login</Link> 
                    </div>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
                Don't have an account ? <Link to='/signup'>Sign Up</Link> 
            </div>
        </>
    )
}
 
export default ForgotPassword;