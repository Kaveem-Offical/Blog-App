import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./context/UserContext";
import Login from "./page/Login";
import Signup from "./page/Signup";
import Layout from "./Layout";
import IndexPage from "./page/IndexPage";
import CreatePost from "./page/CreatePost";
import PostPage from "./page/PostPage";
import EditPost from "./page/EditPost";
import Profile from "./components/Profile";

function App() {
  return (
    <main className="max-w-[960px] mx-auto h-screen">
      <BrowserRouter>
        <UserContextProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<IndexPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Signup />} />
              <Route path="/create" element={<CreatePost />} />
              <Route path="/post/:id" element={<PostPage />} />
              <Route path="/edit/:id" element={<EditPost />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </UserContextProvider>
      </BrowserRouter>
    </main>
  );
}

export default App;
