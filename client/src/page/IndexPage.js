import React, { useContext, useEffect, useState } from "react";
import Post from "../components/Post";
import { UserContext } from "../context/UserContext";
import Login from "./Login";

function IndexPage() {
  const [posts, setPosts] = useState([]);
  const { userInfo } = useContext(UserContext);

  useEffect(() => {
    fetch("http://localhost:8080/post").then((response) => {
      response
        .json()
        .then((posts) => {
          setPosts(posts);
        })
        .catch((err) => {
          console.log("there is an error" + err);
        });
    });
  }, []);

  const username = userInfo?.username;

  return (
    <div>
      {username ? (
        posts.length > 0 &&
        posts.map((post) => (
          <Post
            _id={post._id}
            title={post.title}
            summary={post.summary}
            cover={post.cover}
            author={post.author.username}
            createdAt={post.createdAt}
          />
        ))
      ) : (
        <Login />
      )}
    </div>
  );
}

export default IndexPage;
