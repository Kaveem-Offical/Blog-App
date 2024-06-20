import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

function EditPost() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8080/post/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setSummary(data.summary);
        setContent(data.content);
      })
      .catch((err) => console.log("error in Edit Post" + err));
  }, []);

  async function handleUpdatePost(e) {
    e.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("id", id);
    if (files?.[0]) {
      data.set("file", files?.[0]);
    }
    const response = await fetch("http://localhost:8080/post", {
      method: "PUT",
      body: data,
      credentials: "include",
    });
    if (response.ok) {
      navigate(`/post/${id}`);
      toast.success("Successfully Updated the Post");
    } else {
      toast.error("Error in Updating the Post");
    }
  }

  return (
    <form onSubmit={handleUpdatePost}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Summary"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
      />
      <input type="file" onChange={(e) => setFiles(e.target.files)} />
      <ReactQuill
        value={content}
        onChange={(newValue) => setContent(newValue)}
      />
      <br />
      <button className=" rounded-lg text-white">Update Post</button>
    </form>
  );
}

export default EditPost;
