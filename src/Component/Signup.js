import {Card, Form , Button, Alert } from 'react-bootstrap'
import { useRef,useState } from 'react'; 
import { useAuth } from '../context/AuthContext';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';

const Signup = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [passwordConf,setPasswordConf] = useState('');
    const { signUp } = useAuth();
    const [error,setError] = useState('');
    const [loading,setLoading] = useState(false);
    const [user,setUser] = useState(null)

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handlePasswordConfChange = e => {
        setPasswordConf(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        const auth = getAuth();
        if(password !== passwordConf){
            setError('Passwords do not match');
            return;
        }
        if(email && password && passwordConf){
           setLoading(true);
            createUserWithEmailAndPassword(auth,email,password)
                .then (cred => {
                    setUser(cred.user.email)
                })
                .catch(err => console.log(err.message))
        }
        setLoading(false);
        setError('')
    }
    
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-2'>Sign Up</h2>
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
                        <Form.Group id='password-confirm'>
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control
                            type='password'
                            value={passwordConf}
                            onChange={handlePasswordConfChange}
                            required
                            />
                        </Form.Group>
                        <Button type='submit' disabled={loading} className='w-100 mt-2'>Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
                Already have an account ? Log in
            </div>
        </>
    );
}
 
export default Signup;