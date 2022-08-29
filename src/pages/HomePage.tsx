import { Alert, Container, Spinner } from "react-bootstrap"
import UserCard from "../components/UserCard"
import Navigation from "../components/Navigation"
import { userAPI } from "../services/UserServices"

// all users are fetched then rendered using map and rendering usercard compnent

export default function HomePage () {
    const {data: users, error, isLoading} = userAPI.useFetchAllUsersQuery('')

    return (
        <div>
            <Navigation /> 
            <Container className="d-flex flex-wrap">
                {isLoading && <Spinner className="text-center" animation="border" />}
                {
                    error 
                    ?    
                    <Alert variant="danger">Error: Something went wrong</Alert> 
                    :
                    users && users.map(user => 
                        <UserCard key={user.id} user={user} ></UserCard>
                    )
                }
            </Container>
        </div>
    )
}