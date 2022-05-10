import {Card, Form , Button, Alert } from 'react-bootstrap'
import { useRef,useState } from 'react'; 
import { useAuth } from '../context/AuthContext';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link,Navigate,useNavigate } from 'react-router-dom';

const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const { signUp } = useAuth();
    const [error,setError] = useState('');
    const [loading,setLoading] = useState(false);
    const [user,setUser] = useState(null)
    const Navigate = useNavigate();

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth,email,password)
            .then(cred => {
                console.log(cred.user);
                Navigate('/');
            })
            .catch(err => console.log(err.message))
    }
    
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-2'>Log In</h2>
                    <Form  onSubmit={handleSubmit}>
                        {error && <Alert variant='danger'>{error}</Alert>}
                        {user}
                        <Form.Group id='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                            type='email'
                            value={email}
                            onChange={handleEmailChange}
                            required
                            />
                        </Form.Group>
                        <Form.Group id='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                            type='password'
                            value={password}
                            onChange={handlePasswordChange}
                            required
                            />
                        </Form.Group>
                        <Button type='submit' disabled={loading} className='w-100 mt-2'>Login</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
                Don't have an account ? <Link to='/signup'>Sign Up</Link> 
            </div>
        </>
    );
}
 
export default Login;