import React from "react";
import { Link } from "react-router-dom";

function PostList({ posts }) {
  if (!posts) return <p>Not Found</p>;
  return (
    <div>
      {posts.map((post) => {
        return (
          <p key={post.id}>
            <Link
              to={`/posts/${post.id}`}
              state={{ post: posts.find((data) => data.id === post.id) }}
            >
              {post.title}
            </Link>
          </p>
        );
      })}
    </div>
  );
}

export default PostList;
