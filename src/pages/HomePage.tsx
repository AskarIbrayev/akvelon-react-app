import { Alert, Container, FloatingLabel, Form, Spinner } from "react-bootstrap"
import UserCard from "../components/UserCard"
import Navigation from "../components/Navigation"
import { userAPI } from "../services/UserServices"
import { useMemo, useState } from "react"
import { IUser } from "../types/types"

// all users are fetched then rendered using map and rendering usercard component

export default function HomePage () {
    const [sortValue, setSortValue] = useState<string>('')
    const [page, setPage] = useState<number>(1)
    const [searchQuery, setSearchQuery] = useState<string>('')
    const {data: users, error, isLoading} = userAPI.useFetchAllUsersQuery(page)
    
    const sortedUsers = useMemo(() => {
        return (
            users && [...users].sort((a, b) => {
                const temp_a = sortValue === 'first_name' ? a.first_name : a.last_name
                const temp_b = sortValue === 'first_name' ? b.first_name : b.last_name
                return temp_a.localeCompare(temp_b) 
            })
        )
        }, [sortValue, users]
    )
    
    const sortedSearchedUsers = useMemo(() => {
        return sortedUsers?.filter(user => user.first_name.toLowerCase().includes(searchQuery) || user.last_name.toLowerCase().includes(searchQuery))
    }, [sortedUsers, searchQuery])

    return (
        <div>
            <Navigation /> 
            <Container>
                <div className="row justify-content-end mb-3">
                    <div className="col-3">
                        <Form.Control 
                            type="text" 
                            value={searchQuery} 
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder='Search'
                        />
                    </div>
                    <div className="col-3">
                        <select className="form-select" name="sort" id="sort" value={sortValue} onChange={(e) => setSortValue(e.target.value)}>
                            <option value="" disabled>sort by</option>
                            <option value="first_name">First name</option>
                            <option value="last_name">Last name</option>
                        </select>

                    </div>

                </div>
                <div className="d-flex flex-wrap">
                    {isLoading && <Spinner className="text-center" animation="border" />}
                    {
                        error 
                        ?    
                        <Alert variant="danger">Error: Something went wrong</Alert> 
                        :
                        sortedSearchedUsers && sortedSearchedUsers.map((user: IUser) => 
                            <UserCard key={user.id} user={user} ></UserCard>
                        )
                    }
                </div>
            </Container>
            <div className="mt-5 d-flex justify-content-center">
                <button className={`btn rounded-left ${page === 1 ? 'btn-secondary' : 'btn-outline-secondary'}`} onClick={() => setPage(1)}> 1</button>
                <button className={`btn rounded-right ${page === 2 ? 'btn-secondary' : 'btn-outline-secondary'}`} onClick={() => setPage(2)}> 2</button>

            </div>
        </div>
    )
}