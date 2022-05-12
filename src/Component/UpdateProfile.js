import { Card, Button, Form, Alert } from 'react-bootstrap';
import { useState } from 'react';
import { getAuth, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {
    const [error,setError] = useState('');
    const [name,setName] = useState('');
    const Navigate = useNavigate();

    const handleNameChange = e => {
        setName(e.target.value);
    }
    const HandleSubmit = e => {
        e.preventDefault();
        const auth = getAuth();

        updateProfile(auth.currentUser, {
            displayName : name
        }).then (() => {
            alert('Profile updated successfully');
            Navigate('/');
        }).catch((err) => {
            setError('failed to update profile');
        }) 
    }
    return (
        <>
        <Card>
            <Card.Body>
                <h2 className='text-center mb-2'>Reset Password</h2>
                <Form onSubmit={HandleSubmit}>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    <Form.Group id='email'>
                        <Form.Label>Display Name</Form.Label>
                        <Form.Control 
                        type='text'
                        value={name}
                        onChange={handleNameChange}
                        required
                        />
                    </Form.Group>
                    <Button type='submit' className='w-100 mt-2'>Update Profile</Button>
                </Form>
            </Card.Body>
        </Card>
    </>
    );
}
 
export default UpdateProfile;