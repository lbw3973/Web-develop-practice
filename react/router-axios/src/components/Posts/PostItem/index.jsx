import React from 'react'

function PostItem({ post }) {
    if (!post) return <p>Not Found</p>
    return (
        <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    )
}

export default PostItem
