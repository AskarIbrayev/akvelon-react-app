import { Alert, Container } from "react-bootstrap";
import Navigation from "../components/Navigation";



export default function ErrorPage() {
    return (
        <>
            <Navigation />
            <Container>
                <Alert variant="danger">404: This page does not exist</Alert>
            </Container>
        </>
    )
}