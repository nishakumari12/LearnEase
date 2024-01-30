import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "./components/Posts";
import About from "./components/About";
import Blog from "./components/Blog";
import Home from "./components/Home";
import Course from "./components/Course";
import Contact from "./components/Contact";
import NoPage from "./pages/NoPage";
import Navigation from "./components/Navigation";
import CreateBlog from "./components/CreateBlog";
import BlogReadMore from "./components/BlogReadMore";
import CourseDetail from "./components/CourseDetail";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Logout from "./auth/Logout";
import PrivateRoutes from "./components/PrivateRoutes";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
          <Route path="post" element={<Posts />} />
          <Route path="about" element={<About />} />
          <Route path="home" element={<Home />} />
          <Route path="course" element={<Course />} />
          <Route path="navigation" element={<Navigation />} />
          <Route path="create_blog" element={<CreateBlog />} />
          <Route path="blog/blog_readmore/:id" element={<BlogReadMore />} />
          <Route path="course/course_detail/:id" element={<CourseDetail />} />
        </Route>

        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}
