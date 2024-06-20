import React, { useState } from "react";
import ReactQuill from "react-quill";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const navigate = useNavigate();

  async function handleCreateNewPost(e) {
    e.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("file", files[0]);
    const response = await fetch("http://localhost:8080/post", {
      method: "POST",
      body: data,
      credentials: "include",
    });
    if (response.ok) {
      return navigate("/");
    }
  }
  return (
    <form onSubmit={handleCreateNewPost}>
      <input
        className="text-lg py-1 my-3 px-4"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="text-lg py-1 my-3 px-4"
        type="text"
        placeholder="Summary"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
      />
      <input
        type="file"
        className="text-lg py-1 my-3 px-4"
        onChange={(e) => setFiles(e.target.files)}
      />
      <ReactQuill
        value={content}
        onChange={(newValue) => setContent(newValue)}
      />
      <br />
      <button className="bg-[#222] rounded px-4 py-1 text-white text-lg">
        Create Post
      </button>
    </form>
  );
}

export default CreatePost;
