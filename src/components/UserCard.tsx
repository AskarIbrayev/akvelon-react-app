// this component is used to render the user card anywhere for example in home page for user list
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IUser } from "../types/types";

interface UserCardProps {
    user: IUser
}
export default function UserCard({user}: UserCardProps) {
    return (
        <div className="col-lg-2 col-sm-3 p-2">
                <Link to={`/users/${user.id}`}>
            <Card >
                    <Card.Img src={user.avatar}/>
                    <Card.Body>
                        <Card.Title>{user.first_name} {user.last_name}</Card.Title>
                    </Card.Body>
            </Card>
                </Link>

        </div>
    )
}