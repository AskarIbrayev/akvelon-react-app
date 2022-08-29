import { Alert, Card, Container, ListGroup, Spinner } from "react-bootstrap"
import Navigation from "../components/Navigation"
import { useParams } from "react-router-dom"
import { userAPI } from "../services/UserServices"


export default function UserPage () {
    let params = useParams()
    const {data: user, error, isLoading} = userAPI.useFetchUserQuery(params.userID)

    return (
        <>
            <Navigation />
            <Container>
                {isLoading && <Spinner className="text-center" animation="border" />}
                    {
                        error 
                        ? 
                        <Alert variant="danger">Something went wrong</Alert> 
                        :
                        
                        <Card className="col-4">
                            <Card.Img variant="left" src={user?.avatar} />
                            <Card.Body>
                                <Card.Title>{user?.first_name} {user?.last_name}</Card.Title>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item><strong>ID:</strong> {user?.id}</ListGroup.Item>
                                <ListGroup.Item><strong>Email:</strong> {user?.email}</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    }

            </Container>
        </>
    ) 
}
