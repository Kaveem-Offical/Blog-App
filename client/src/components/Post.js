import React, { useState } from "react";
import { Link } from "react-router-dom";

function Post({ _id, title, summary, cover, content, createdAt, author }) {
  function truncate(str, words) {
    const truncated = str.split(" ").splice(0, words).join(" ");
    if (str.length > truncated.length) {
      return truncated + "...";
    }
    return truncated;
  }

  return (
    <div className="post">
      <div className="image">
        <Link to={`/post/${_id}`}>
          <img src={"http://localhost:8080/" + cover} alt="" />
        </Link>
      </div>
      <div className="texts">
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
        </Link>
        <p className="info">
          <a className="author">{author}</a>
          <time>{new Date(createdAt).toLocaleDateString()}</time>
        </p>
        <p className="summary">
          <p>{truncate(summary, 23)}</p>
        </p>
      </div>
    </div>
  );
}

export default Post;
