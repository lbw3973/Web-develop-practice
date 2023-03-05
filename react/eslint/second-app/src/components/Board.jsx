import React, { useState } from 'react'
import { data } from '../constants/data'

function Board() {
  const [posts, setPosts] = useState(data)
  const removePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id))
  } // 일치하지 않는 것만 남긴다 -> 해당 id만 제외한다
  const addPost = (post) => {
    setPosts([...posts, post])
  }
  const updatePost = (newPost, id) => {
    setPosts(posts.map((post) => (post.id === id ? newPost : post)))
  }

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
          <button onClick={() => removePost(post.id)}>제거하기</button>
          <button onClick={() => updatePost({ ...post, title: '새 타이틀' }, post.id)}>수정하기</button>
        </div>
      ))}
      {/* <button
        onClick={() => {
          setPosts([...posts, { id: 4, title: '4번째글', content: '4번째내용' }])
        }}
      >
        추가하기
      </button> */}
    </div>
  )
}

export default Board
