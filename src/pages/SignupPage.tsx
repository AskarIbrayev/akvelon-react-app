import { useState } from "react";
import { Container, Form, Button, Navbar, Nav, Alert, Spinner } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { userAPI } from "../services/UserServices";

// this API does not allow creating new users therefore 
// you can only select from existing users.

export default function Signup() {
    const navigate = useNavigate()
    const [createUser, {error, isLoading}] = userAPI.useCreateUserMutation()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleRegister = () => {
        createUser( {email, password})
        .unwrap()
        // if succesful it will redirect to ligin page
            .then(() => {
                navigate('/login')
                setEmail('')
                setPassword('')
            })
            .catch((error) => {
                console.error(error)
                setEmail('')
                setPassword('')
            })
    }

    return (
        <div>
            <Navbar bg="light" variant="light" sticky="top" className="shadow-sm mb-3">
                <Container>
                    <Nav className="ms-auto fw-bold">
                        <LinkContainer to="/auth">
                            <Nav.Link>Login</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Container>
            </Navbar>
            <Container className="col-md-5 mt-5 ">
                <Form>
                    <h4 className="text-center">Register</h4>
                    <Form.Group>
                        <Form.Label >Email</Form.Label>
                        <Form.Control 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            placeholder="example@email.com" 
                        />
                    </Form.Group>
                    <Form.Group className="mt-2 mb-2">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            placeholder="password" 
                        />
                    </Form.Group>
                    {
                        error ? 
                        <>
                            <Alert variant={'danger'}>Something went wrong. Details:<br/> {JSON.stringify(error)}</Alert>
                            <Alert variant={'info'}>Try for example" <strong>eve.holt@reqres.in</strong> " and random password</Alert>
                        </>
                        : ''
                    }

                    <div className="mt-3 text-center">
                        <Button 
                            onClick={handleRegister} 
                            variant="secondary"
                        >
                            Signup
                        </Button>
                    </div>
                    
                    <div className="mt-4 text-center">
                        {isLoading && <Spinner className="text-center" animation="border" />}
                        <p className="fs-6">
                            If you already have an account please 
                            <Link to='/auth'>login</Link>
                        </p>
                    </div>
                </Form>
            </Container>
            <Container>
                <p className="text-muted mt-5">NOTE: this API does not allow creating new users therefore 
                you can only select from existing users. Some of them: 
                "eve.holt@reqres.in", "george.bluth@reqres.in", "janet.weaver@reqres.in", "emma.wong@reqres.in"
                </p>
            </Container>
        </div>
    )
}
