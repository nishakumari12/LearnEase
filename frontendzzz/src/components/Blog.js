import React from "react";
import "../style/style.css";
import Navigation from "./Navigation";
import Footer from "./Footer";
import axios from "axios";
import BlogReadMore from "./BlogReadMore";
import { useNavigate } from "react-router-dom";
import { LOCAL_BACKEND_URL } from "../service/Constants"; 
function Blog() {
  const [blogs, setBlogs] = React.useState([]);

  const navigate=useNavigate();

  React.useEffect(() => {
    console.log("random text from posts");

    axios.get(LOCAL_BACKEND_URL+"blog/blog_list").then((response) => {
      setBlogs(response.data.response);
      console.log(response);
    });
  }, []);

  const handleButtonClick = (id) =>{
    navigate(`/blog/blog_readmore/${id}`)
  }


  return (
    
    <div>
      {/* Navigation */}
      <Navigation activePage={"blogPage"} />
      {/*Home*/}
      <section id="about-home">
        <h2>Blog</h2>
      </section>
      <section id="create-blog-btn">
            <div className="btn">
              <a className="blue" href="create_blog">Create Blog</a>
      
            </div>
      </section>
      <section id="blog-container">

        <div className="blogs">

          {blogs.map((blog) => (
            <div className="post">
              <img src={blog.image} alt="" />
              <h3>{blog.title}</h3>
              <p>{blog.content}</p>
              <button onClick={() => handleButtonClick(blog.id)}> read more
              </button>
              {/* <a href="blog_readmore">Read More</a> */}
              <hr/>
            </div>

          ))}
        </div>
        <div className="cate">
          <h2>Categories</h2>
          <hr />
          <a href="#">Web Development</a>
          <hr />
          <a href="#">Web Design</a>
          <hr />
          <a href="#">App Development</a>
          <hr />
          <a href="#">Frontend Web</a>
          <hr />
          <a href="#">Python Programing</a>
          <hr />
          <a href="#">JavaScript Hack</a>
          <hr />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Blog;
