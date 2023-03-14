import React, { useEffect, useState } from "react";
import { getPosts } from "../../apis/posts";
import { PostList } from "../../components/Posts";
import { postData } from "../../constants/postData";

function Posts() {
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    const data = await getPosts();
    setPosts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h3>Posts</h3>
      {posts && <PostList posts={posts} />}
    </div>
  );
}

export default Posts;
