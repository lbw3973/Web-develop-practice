import React from 'react'

function UserItem({ user }) {
    if (!user) return <p>Not Found</p>
    return (
        <div>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
        </div>
    )
}

export default UserItem
