import React, { useState } from "react";
import "../style/style.css";
import Navigation from "./Navigation";
import Footer from "./Footer";
import axios from "axios";

function CreateBlog() {
  const [createblogs, setCreateBlogs] = useState({
    title: "",
    blog_creator: "",
    created_on: "",
    content: "",
    image: null,
  });

  const handleChange = (e) => {
    setCreateBlogs({ ...createblogs, [e.target.name]: e.target.value });
  };

  const uploadPicture = (e) => {
    setCreateBlogs({ ...createblogs, [e.target.name]: e.target.files[0] });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to create a new blog
      var bodyFormData = new FormData();
      bodyFormData.append("title", createblogs.title);
      bodyFormData.append("blog_creator", createblogs.blog_creator);
      bodyFormData.append("created_on", createblogs.created_on);
      bodyFormData.append("image", createblogs.image);
      bodyFormData.append("content", createblogs.content);

      const response = await axios.post(
        "http://127.0.0.1:8080/blog/create_blog",
        bodyFormData
      );

      // Handle the response, you can log or update state accordingly
      console.log(response.data);

      // Optionally, clear the form after successful submission
      setCreateBlogs({
        title: "",
        blog_creator: "",
        created_on: "",
        content: "",
      });
      e.target.reset();
    } catch (error) {
      // window.location.reload();
      console.log("Error creating blog:", error);
    }
  };
  return (
    <div>
      {/* Navigation */}
      <Navigation activePage={"blogPage"} />
      {/*Home*/}
      <section id="about-home">
        <h2>Create Blog</h2>
      </section>
      <section id="create-blog-form">
        <div className="form">
          <h4>Create Your Blog</h4>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                placeholder="Title"
                name="title"
                value={createblogs.title}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Creator Name"
                name="blog_creator"
                value={createblogs.blog_creator}
                onChange={handleChange}
              />
            </div>
            <div className="form-row">
              <input
                type="text"
                placeholder="Created on"
                name="created_on"
                value={createblogs.created_on}
                onChange={handleChange}
              />
              <input
                type="file"
                placeholder="Image"
                name="image"
                onChange={uploadPicture}
              />
            </div>
            <div className="form-col">
              <textarea
                name="content"
                id="content"
                cols={30}
                rows={8}
                placeholder="Content"
                value={createblogs.content}
                onChange={handleChange}
                defaultValue={""}
              />
            </div>
            <div className="form-btn">
              <button type="submit">Create</button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default CreateBlog;
