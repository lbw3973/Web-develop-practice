import React from 'react'
import { UserList } from '../../components/users'
import { userData } from '../../constants/userData'

function Users() {
    return (
        <div>
            <h3>Users</h3>
            <UserList users={userData} />
        </div>
    )
}

export default Users
