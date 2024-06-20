import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { toast } from "react-toastify";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUserInfo } = useContext(UserContext);
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    if (response.ok) {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
      toast.success("Login Successful");
      navigate("/");
    } else {
      toast.error("Incorrect Username or Password ");
    }
  }
  return (
    <div className="mx-auto">
      <form
        onSubmit={handleLogin}
        className="flex flex-col mx-auto w-[400px] gap-2"
      >
        <h1 className="mx-auto text-center p-10">Login</h1>
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
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
