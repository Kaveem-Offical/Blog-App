import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function UserPosts() {
  const { id } = useParams();
  const [postInfo, setPostInfo] = useState(null);
  const { userInfo } = useContext(UserContext);

  useEffect(() => {
    fetch(`http://localhost:8080/post/${id}`).then((res) =>
      res.json().then((postInfo) => setPostInfo(postInfo))
    );
  }, []);
  if (!postInfo) return <div>Loading...</div>;
  return <div className="post-page">Post page</div>;
}

export default UserPosts;
