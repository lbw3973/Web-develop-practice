import React, { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { postData } from "../../constants/postData";

function Posts() {
  // 검색 파라미터를 설정해주기 위한 훅
  const [searchParams, setSearchParams] = useSearchParams();
  const [posts, setPosts] = useState(postData);

  const searchInputHandler = (e) => {
    const title = e.target.value;
    title ? setSearchParams({ title }) : setSearchParams({});
  };

  useEffect(() => {
    setPosts(
      postData.filter((post) => {
        const filter = searchParams.get("title");
        const title = post.title.toLowerCase();
        return filter ? title.includes(filter) : true;
      })
    );
  }, [searchParams]);

  return (
    <div>
      <input onChange={searchInputHandler} />
      {posts.map((post) => (
        <div key={post.id}>
          <Link
            to={`/posts/${post.id}`}
            state={{ post: posts.find((data) => data.id === post.id) }}
          >
            {post.title}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Posts;
