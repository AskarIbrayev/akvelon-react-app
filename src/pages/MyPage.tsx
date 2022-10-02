import { Alert, Card, Container, ListGroup, Row, Spinner } from "react-bootstrap"
import Navigation from "../components/Navigation"
import { userAPI } from "../services/UserServices"
import { useAppSelector } from "../hooks/redux"


export default function MyPage () {
    // get all users and find the user using email from the userEmail state that was registered when logging in
    // and then render data to the mypage
    
    const userEmail = useAppSelector(state => state.userEmailReducer.value)
    const {data: users, error, isLoading} = userAPI.useFetchAllUsersQuery(1)
    const users2 = userAPI.useFetchAllUsersQuery(2).data
    const allUsers = users && users2 && [...users, ...users2]
    const user = allUsers?.find((user) => user.email === userEmail)
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
                        <>
                            <h1>My Page</h1>
                            <Row>
                                <Card className="col-4 me-2">
                                    <Card.Img src={user?.avatar} />
                                </Card>
                                <Card className="col">
                                    <Card.Body>
                                        <Card.Title>{user?.first_name} {user?.last_name}</Card.Title>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item><strong>ID:</strong> {user?.id}</ListGroup.Item>
                                        <ListGroup.Item><strong>Email:</strong> {user?.email}</ListGroup.Item>
                                    </ListGroup>
                                </Card>
                            </Row>
                        </>
                    }

            </Container>
        </>
    ) 
}
