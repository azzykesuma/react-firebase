import {Card, Form , Button } from 'react-bootstrap'
import { useRef } from 'react'; 

const Signup = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfRef = useRef();

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-2'>Sign Up</h2>
                    <Form>
                        <Form.Group id='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' ref={emailRef}/>
                        </Form.Group>
                        <Form.Group id='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' ref={passwordRef}/>
                        </Form.Group>
                        <Form.Group id='password-confirm'>
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type='password' ref={passwordConfRef}/>
                        </Form.Group>
                        <Button type='submit' className='w-100 mt-2'>Sign Up</Button>
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