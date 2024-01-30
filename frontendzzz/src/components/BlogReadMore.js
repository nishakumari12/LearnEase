import React, { useState, useEffect } from "react";
import "../style/style.css";
import Navigation from "./Navigation";
import Footer from "./Footer";
import axios from "axios";
import { useParams } from "react-router-dom";

function BlogReadMore() {
  const [blog, setBlog] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    axios
      .get("http://127.0.0.1:8080/blog/blog_readmore?id=" + id)
      .then((response) => {
        setBlog(response.data.response);
      })
      .catch((error) => {
        console.error("Error fetching blog data:", error);
      });
  }, []);

  return (
    <div>
      {/* Navigation */}
      <Navigation activePage={"blogPage"} />
      {/*Home*/}
      <section id="blog-container">
    
          {blog ? (
            <div class="blogs blogpost">
              <div class="post">
                {blog.image && <img src={blog.image} alt="Blog" />}
                <h3>{blog.title}</h3>
                <h4>Created by : {blog.blog_creator}</h4>
                <h4>Created on : {blog.created_on}</h4>
                <p>{blog.content}</p>
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}

      </section>
      {/* <Footer /> */}
    </div>
  );
}

export default BlogReadMore;

