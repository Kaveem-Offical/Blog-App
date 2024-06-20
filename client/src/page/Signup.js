import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  async function handleRegister(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 200) {
      toast.success("Registered Successfully");
      navigate("/login");
    } else {
      toast.error("Username already exists");
    }
  }
  return (
    <div>
      <div className="mx-auto">
        <form
          onSubmit={handleRegister}
          className="flex flex-col mx-auto w-[400px] gap-2"
        >
          <h1 className="mx-auto text-center p-10">Register</h1>
          <input
            className=" outline-none text-xl px-4 py-1"
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className=" outline-none text-xl px-4 py-1"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-[#222] rounded px-4 py-1 text-white text-lg">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
