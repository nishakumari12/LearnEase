import React from "react";
import axios from "axios";
import '../style/style.css';

function Posts() {
  const [posts, setPosts] = React.useState([]);


 
  React.useEffect(() => {

    console.log("random text from posts")
    
    axios
      .get("http://127.0.0.1:8080/blog/blog_list")
      .then(response => {
        // console.log(response)
        setPosts(response.data.response);
        console.log(response);
        // console.log(typeof response.data);
        // console.log(response.data)
      });



  }, []);


  
  return (
    <>
    <div className="blogs">
      {posts.map((post) => (
        <div className="post">
          <img src="images/d1.jpg" alt="" />
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <a href="post.html">Read More</a>
        </div>
        ))}

        </div>
    
   </>
  );
}

export default Posts;




