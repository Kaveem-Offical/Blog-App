import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Mode from "./Mode";
import Dropdown from "rsuite/Dropdown";
import "rsuite/dist/rsuite.min.css";
import { toast } from "react-toastify";

function Header() {
  const { setUserInfo, userInfo } = useContext(UserContext);

  useEffect(() => {
    fetch("http://localhost:8080/profile", {
      credentials: "include",
    }).then((response) =>
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      })
    );
  }, []);

  function handleLogout() {
    fetch("http://localhost:8080/logout", {
      method: "POST",
      credentials: "include",
    })
      .then(() => {
        setUserInfo(null);
        toast.success("Successfully logged out");
      })
      .error((err) => {
        toast.error("Error in Logging out", err.message);
      });
  }

  const username = userInfo?.username;

  return (
    <div>
      <header className="flex mt-5 mb-16 items-center justify-between">
        <Link
          to={"/"}
          className="no-underline text-current text-3xl font-bold  hover:no-underline hover:text-current"
        >
          My Bolg
        </Link>
        <nav>
          {username ? (
            <div className="flex flex-row gap-6">
              <div className="pt-2">
                <Mode />
              </div>
              <Link
                to={"/create"}
                className="no-underline text-current hover:no-underline text-lg pt-1 hover:text-current"
              >
                <p>Create new post</p>
              </Link>

              <Dropdown title="Profile" className="p-0 text-current">
                <Link className=" hover:no-underline" to={"/profile"}>
                  <Dropdown.Item>Edit Profile</Dropdown.Item>
                </Link>
                {/* <Dropdown.Item>My Posts</Dropdown.Item> */}
                <Link className="hover:no-underline " onClick={handleLogout}>
                  <Dropdown.Item>Logout</Dropdown.Item>
                </Link>
              </Dropdown>
            </div>
          ) : (
            <div className="flex flex-row gap-6">
              <Mode />
              <Link
                to={"/login"}
                className="no-underline text-current text-lg hover:no-underline hover:text-current"
              >
                Login
              </Link>
              <Link
                to={"/register"}
                className="no-underline text-lg text-current hover:no-underline hover:text-current"
              >
                Register
              </Link>
            </div>
          )}
        </nav>
      </header>
    </div>
  );
}

export default Header;
