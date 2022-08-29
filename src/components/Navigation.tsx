// this component is used everywhere where the user is authorized
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import { useAppDistpatch } from "../hooks/redux";
import { logout } from "../store/reducers/isAuthSlice";

export default function HomePage () {
    const dispatch = useAppDistpatch()
    
    // using logout button the isAuth state can be changed to false so user is no logner authorized

    return (
        <Navbar bg="light" variant="light" sticky="top" className="shadow-sm mb-3" >
            <Container>
                <Nav className="fw-bold">
                    <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                </Nav>
                <Nav className="fw-bold ms-auto">
                    <LinkContainer to="/mypage">
                        <Nav.Link>My page</Nav.Link>
                    </LinkContainer>
                </Nav>
                <Nav className="fw-bold">
                    
                    <LinkContainer onClick={() => dispatch(logout())} to="/auth">
                        <Nav.Link>Logout</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Container>
        </Navbar>
    )
}