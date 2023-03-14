import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPost } from "../../../apis/posts";
import { PostItem } from "../../../components/Posts";
import { postData } from "../../../constants/postData";

function PostDetail() {
  const navigate = useNavigate();
  const { postId } = useParams();
  const [post, setPost] = useState([]);
  const fetchData = async () => {
    const data = await getPost(postId);
    setPost(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <PostItem post={post} />
      <button onClick={() => navigate(-1)}>뒤로 가기</button>
    </div>
  );
}

export default PostDetail;
