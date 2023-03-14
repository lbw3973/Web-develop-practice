import React from 'react'
import { Link } from 'react-router-dom'

function UserList({ users }) {
    if (!users) return <p>Not Found</p>
    return (
        <div>
            {users.map((user) => {
                return (
                    <p key={user.id}>
                        <Link to={`/users/${user.id}`} state={{ user: users.find((data) => data.id === user.id) }}>
                            {user.name}
                        </Link>
                    </p>
                )
            })}
        </div>
    )
}

export default UserList
