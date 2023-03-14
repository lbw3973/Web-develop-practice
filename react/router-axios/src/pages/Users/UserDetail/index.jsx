import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { UserItem } from '../../../components/Users'
import { userData } from '../../../constants/userData'

function UserDetail() {
    const navigate = useNavigate()
    const params = useParams()
    const user = userData.find((user) => user.id === Number(params.userId))

    return (
        <div>
            <UserItem user={user} />
            <button onClick={() => navigate(-1)}>뒤로 가기</button>
        </div>
    )
}

export default UserDetail
