import Header from "./components/Header";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Blogs from "./components/Blogs";
import UserBlogs from "./components/UserBlogs";
import AddBlog from "./components/AddBlog";
import BlogDetail from "./components/BlogDetail";
import Auth from "./components/Auth";
import { authActions } from "./store";
import { useDispatch, useSelector } from "react-redux";
import zIndex from "@mui/material/styles/zIndex";
function App() {
  const dispath = useDispatch();

  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  useEffect(() => {
    if (localStorage.getItem("userId")) {
      dispath(authActions.login());
    }
  }, [dispath]);

  return (
    <React.Fragment>
      <header>
        <Header />
      </header>

      <main>
        <Routes>
          {!isLoggedIn ? (
            <Route path="/auth" element={<Auth />} />
          ) : (
            <>
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/add" element={<AddBlog />} />
              <Route path="/myBlogs" element={<UserBlogs />} />
              <Route path="/myBlogs/:id" element={<BlogDetail />} />{" "}
            </>
          )}
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;