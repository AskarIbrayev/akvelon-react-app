import { useState } from "react";
import { Container, Form, Button, Navbar, Nav, Alert, Spinner } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAppDistpatch } from "../hooks/redux";
import { userAPI } from "../services/UserServices";
import { login } from "../store/reducers/isAuthSlice";
import { keepEmail } from "../store/reducers/userEmailSlice";

// this API does not allow creating new users therefore 
// you can only select from existing users.

export default function Login() {
    const dispatch = useAppDistpatch()
    const navigate = useNavigate()

    const [loginUser, {error, isLoading}] = userAPI.useLoginUserMutation()
    
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [errorMessage, setErrorMessage] = useState<string>('')
    
    const handleLogin = () => {
        setErrorMessage('')
        if (!validateEmail(email) || !validatePassword(password)) {
            if (!validateEmail(email)) setErrorMessage('Invalid email format ')
            if (!validatePassword(password)) setErrorMessage(prev => prev + '| Invalid password format')
            return
        }
        
        loginUser( {email, password})
        .unwrap()
        // if login credentials are successful it first changes the isAuth state to true 
        // then keeps the email and redirect to home page
            .then(() => {
                dispatch(login())
                dispatch(keepEmail(email))
                navigate('/')
                setEmail('')
                setPassword('')
            })
            // if credentials are not correct then or any other error from server it will not be redirected
            // and the user wwill be notified about the error
            .catch((error) => {
                console.error(error)
                setEmail('')
                setPassword('')
            })
    }
    const validateEmail = (email: string) => {
        const emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (email.match(emailformat)) return true
        return false
    }
    const validatePassword = (password: string) => {
        if (password.length < 4) return false
        return true
    }
    return (
        <>
            <Navbar bg="light" variant="light" sticky="top" className="shadow-sm mb-3">
                <Container>
                    <Nav className="ms-auto fw-bold">
                        <LinkContainer to="/register">
                            <Nav.Link>Signup</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Container>
            </Navbar>

            <Container className="col-md-5 mt-5 ">
                <Form>
                    <h4 className="text-center">Login</h4>
                    <Form.Group>
                        <Form.Label >Email</Form.Label>
                        <Form.Control 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            placeholder="example@email.com" 
                        />                    </Form.Group>
                    <Form.Group className="mt-2 mb-2">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            placeholder="password" 
                        />
                    </Form.Group>
                    {errorMessage && <Alert variant={'danger'} className="py-1">{errorMessage ? errorMessage : ''}</Alert>}
                    {
                        error ? 
                        <>
                            <Alert variant={'danger'} className="py-1">Something went wrong. Details:<br/> {JSON.stringify(error)}</Alert>
                            <Alert variant={'info'} className="py-1">Try for example" <strong>eve.holt@reqres.in</strong> " and random password</Alert>
                        </>
                        : 
                        ''
                    }
                    <div className="mt-3 text-center">
                        <Button 
                            disabled={(email && password) ? false : true} 
                            onClick={handleLogin} 
                            variant="secondary"
                        >
                            Login
                        </Button>
                    </div>
                    
                    <div className="mt-3 text-center">
                        {isLoading && <Spinner className="text-center" animation="border" />}
                        <p>If you don't have an account please <Link to='/register'>register</Link></p>
                    </div>
                </Form>
            </Container>
            {/* <Container>
                <p className="text-muted mt-5">NOTE: this API does not allow creating new users therefore 
                    you can only select from existing users. Some of them: 
                    "eve.holt@reqres.in", "george.bluth@reqres.in", "janet.weaver@reqres.in", "emma.wong@reqres.in"
                </p>
            </Container> */}
        </>
    )
}