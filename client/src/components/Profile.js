import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

function Profile() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleUpdate(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:8080/updateprofile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
      credentials: "include",
    });

    if (response.ok) {
      toast.success("Successfully updated profile");
    } else {
      const error = await response.json();
      toast.error(`Failed to update profile: ${error}`);
    }
  }

  return (
    <div>
      <div className="mx-auto">
        <form
          onSubmit={handleUpdate}
          className="flex flex-col mx-auto w-[400px] gap-2"
        >
          <h1 className="mx-auto text-center p-10">Update Profile</h1>
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
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
