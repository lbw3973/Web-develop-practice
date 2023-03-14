import React from "react";
import {
  useLocation,
  useNavigate,
  useOutletContext,
  useParams,
} from "react-router-dom";
import { postData } from "../../../constants/postData";

function PostDetail() {
  // const { postId } = useParams();
  // const post = postData.find((post) => post.id === Number(postId));
  // const context = useOutletContext();

  const location = useLocation();
  const { post } = location.state;
  const navigate = useNavigate();

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button
        onClick={() => {
          navigate(-1, { replace: true });
          // navigate(-1);
        }}
      >
        뒤로가기
      </button>
    </div>
  );
}

export default PostDetail;
